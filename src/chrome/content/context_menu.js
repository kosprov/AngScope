var AngScopeFbModule = {
    inspectAngScope: function inspectAngScope() {
        var angular = content.wrappedJSObject.angular;
        if (angular && Firebug) {
            var scope = angular.element(gContextMenu.target).scope();
            if (scope) {
            	Firebug.browserOverlay.startFirebug(function() {
            		Firebug.toggleBar(true);
               	Firebug.chrome.select(scope, 'dom');	
            	});
            }
        }
    }
};
