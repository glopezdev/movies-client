var app = angular.module('movieClientApp', ['ui.router']);
app.config(["$stateProvider","$urlRouterProvider",
  function($stateProvider, $urlRouterProvider) {
    console.log("state provider!!!");
    alert("state provider!!!");
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/list");
  //
  // Now set up the states
  $stateProvider
    .state('list', {
      url: "/list",
      templateUrl: "list/list.html",
  //    controller: "ListController"
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "state2.html"
    })
}]);
console.log("appp.js");