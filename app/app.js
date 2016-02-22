var app = angular.module('movieClientApp', ['ngTouch', 'ui.grid']);

app.controller('MainCtrl', ['$scope', function ($scope) {

  $scope.someProp = 'Click!';
  $scope.showMe = function(){
    alert($scope.someProp);
  };

  $scope.gridOptions = {};

  //you can override the default assignment if you wish
  //$scope.gridOptions.appScopeProvider = someOtherReference;

  $scope.gridOptions.columnDefs = [
    { name: 'name' },
    { name: 'gender'},
    { name: 'year'},
    { name: 'btn1',cellTemplate:'<button class="btn primary" ng-click="grid.appScope.showMe()">Click Me</button>' },
    { name: 'btn2',cellTemplate:'<button class="btn primary" ng-click="grid.appScope.showMe()">Click Me</button>' },
    { name: 'btn3',cellTemplate:'<button class="btn primary" ng-click="grid.appScope.showMe()">Click Me</button>' }
  ];

   $scope.gridOptions.data = [
     {
       name: "Pulp Fiction",
       year: "1994",
       gender: "action"
     },
     {
       name: "The Godfather",
       year: "1972",
       gender: "action"
     },
     {
       name: "Fight Club",
       year: "1999",
       gender: "action"
     },
     {
       name: "Star Wars: Episode V - The Empire Strikes Back",
       year: "1980",
       gender: "Sci-Fi"
     }
   ];

/*
  $http.get('/data/100.json')
    .success(function(data) {
      $scope.gridOptions.data = data;
    });
*/
}]);