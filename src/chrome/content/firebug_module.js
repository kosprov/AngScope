FBL.ns(function () {
    with (FBL) {
        Firebug.AngScopeFbModule = extend(Firebug.Module,
        {
            initialize: function () {
                Firebug.Module.initialize.apply(this, arguments);
                Firebug.registerUIListener(this);
            },

            shutdown: function () {
                Firebug.Module.shutdown.apply(this, arguments);
                Firebug.unregisterUIListener(this);
            },

            onContextMenu: function (items, object, target, context, panel, popup) {
                var angular = XPCNativeWrapper.unwrap(context.window).angular;
                if (angular) {
                    try {
                        var scope = angular.element(object).scope();
                        if (scope) {
                            var domPanel = context.panelMap['dom'];
                            items.push({
                                label: 'Inspect Angular Scope',
                                tooltiptext: 'Inspect Angular Scope of the selected element in the DOM panel',
                                command: function () {
                                    return context.chrome.select(scope, 'dom');
                                },
                                image: 'chrome://angscope/skin/icon16.png',
                                nol10n: true,
                                id: 'angscope-action'
                            });
                        }
                    } catch (e) {
                        if (FBTrace.DBG_CONSOLE) FBTrace.sysout('angscope; exception:', e);
                    }
                }
                return items;
            }
        });

        Firebug.registerModule(Firebug.AngScopeFbModule);
    }
});
