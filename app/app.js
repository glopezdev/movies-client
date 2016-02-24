(function() {
    var app = angular.module('movieClientApp',
        ['ui.router', 'movieClientAppList','movieClientAppEdit', 'movieClientAppDetails']);
    app.config(["$stateProvider", "$urlRouterProvider",
        function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/list");

            $stateProvider
                .state('list', {
                    url: "/list",
                    templateUrl: "list/list.html",
                    //    controller: "ListController" this loads the controller 2 times and gives an error
                })
                .state('edit', {
                    url: "/edit/:id",
                    templateUrl: "edit/edit.html"
                })
                .state('details', {
                    url: "/details/:id",
                    templateUrl: "details/details.html"
                })
        }
    ]);

})();