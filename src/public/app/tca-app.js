var tcaApp = angular.module('tcaApp', ['ngRoute']);

tcaApp.config(['$routeProvider', 

        function($routeProvider) { 

            $routeProvider
                .when('/', {
                    templateUrl: 'app/views/home.html',
                    controller : 'homeCtrl'
                })
                .when('/services', {
                    templateUrl: 'app/views/services.html',
                    controller : 'servicesCtrl'
                })
                .when('/apropos', {
                    templateUrl: 'app/views/apropos.html',
                    controller : 'aproposCtrl'
                })
                .when('/innov24', {
                    templateUrl: 'app/views/innov24.html',
                    controller : 'innov24Ctrl'
                })
                .when('/references', {
                    templateUrl: 'app/views/references.html',
                    controller : 'referencesCtrl'
                })
                //.when('/contact', {
                //    templateUrl: 'app/views/contact.html',
                //    controller : 'contactCtrl'
                //})
                .when('/sectors', {
                    templateUrl: 'app/views/home.html',
                    controller : 'sectorsCtrl'
                })
                .when('/sectors/economy', {
                    templateUrl: 'app/views/economy.html',
                    controller : 'sectorsCtrl'
                })
                .when('/sectors/security', {
                    templateUrl: 'app/views/security.html',
                    controller : 'sectorsCtrl'
                })
                .when('/sectors/construction', {
                    templateUrl: 'app/views/construction.html',
                    controller : 'sectorsCtrl'
                })
                .when('/sectors/transport', {
                    templateUrl: 'app/views/transport.html',
                    controller : 'sectorsCtrl'
                })
                .when('/sectors/computing', {
                    templateUrl: 'app/views/computing.html',
                    controller : 'sectorsCtrl'
                })
                .when('/sectors/industry', {
                    templateUrl: 'app/views/industry.html',
                    controller : 'sectorsCtrl'
                })
                .when('/sectors/science', {
                    templateUrl: 'app/views/science.html',
                    controller : 'sectorsCtrl'
                })
                .when('/plan', {
                    templateUrl: 'app/views/plan.html',
                    controller : 'planCtrl'
                })
                .when('/legal', {
                    templateUrl: 'app/views/legal.html',
                    controller : 'legalCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);

tcaApp.controller('homeCtrl', [function() {
}]);

tcaApp.controller('servicesCtrl', [function() {
}]);

tcaApp.controller('aproposCtrl', [function() {
}]);

tcaApp.controller('innov24Ctrl', [function() {
}]);

tcaApp.controller('referencesCtrl', [function() {
}]);

tcaApp.controller('contactCtrl', ['$scope', 'postMessage', function($scope, postMessage) {

    $scope.name = 'plop';
    $scope.organization = 'toto';
    $scope.email = 'plop@toto.com';
    $scope.message = 'coucousava?';

    $scope.result = '';

    $scope.submitForm = function () {
        postMessage.post($scope);
        $scope.name = '';
        $scope.organization = '';
        $scope.email = '';
        $scope.message = '';
    }

}]);

tcaApp.controller('sectorsCtrl', [function() {
}]);

tcaApp.controller('planCtrl', [function() {
}]);

tcaApp.controller('legalCtrl', [function() {
}]);
