var tcaApp = angular.module('tcaApp');

tcaApp.config(['$httpProvider', function ($httpProvider) {    
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
}]);

tcaApp.service('postMessage', ['$http', function($http) {

    this.post = function(scope) {

        var url = '/';

        var data = {
            name : scope.name,
            organization : scope.organization,
            email : scope.email,
            message : scope.message,
        };

        var success = function(response) {
            scope.done = true;
            scope.error = false;
        };

        var error = function(response) {
            scope.done = true;
            scope.error = true;
        };

        $http.post(url, data).then(success, error);

    }

}]);
