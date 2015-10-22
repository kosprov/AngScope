var AngScopeFbModule = {
    inspectAngScope: function inspectAngScope() {
        var angular = content.wrappedJSObject.angular;
        if (angular) {
            var scope = angular.element(gContextMenu.target).scope();
            if (scope) {
                content.wrappedJSObject.angularScope = scope;
                if (Firebug) {
                    Firebug.browserOverlay.startFirebug(function() {
                        Firebug.toggleBar(true);
                        Firebug.chrome.select(scope, 'dom');
                    });
                }
            }
        }
    }
};
