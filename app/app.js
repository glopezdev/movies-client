(function() {
    var app = angular.module('movieClientApp', ['ui.router', 'movieClientAppList']);
    app.config(["$stateProvider", "$urlRouterProvider",
        function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/list");

            $stateProvider
                .state('list', {
                    url: "/list",
                    templateUrl: "list/list.html",
                    //    controller: "ListController" this gives loads the controller 2 times and gives an error
                })
                .state('edit', {
                    url: "/edit",
                    templateUrl: "edit/edit.html"
                })
        }
    ]);

})();