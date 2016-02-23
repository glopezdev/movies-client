(function() {
  var app = angular.module('movieClientApp', ['ngTouch', 'ui.grid','movieClientService']);
  app.controller('MainCtrl', ['$scope','Movies', function ($scope, Movies) {

    $scope.showMe = function () {
      alert('Click!');
    };

    $scope.gridOptions = {};

    $scope.gridOptions.onRegisterApi = function (gridApi) {
      $scope.gridApi = gridApi;
      $scope.gridApi.grid.registerRowsProcessor($scope.singleFilter, 200);
    }

    $scope.gridOptions.columnDefs = [
      {name: 'name'},
      {name: 'gender'},
      {name: 'year'},
      {name: 'btn1', cellTemplate: '<button class="btn primary" ng-click="grid.appScope.showMe()">Click Me</button>'},
      {name: 'btn2', cellTemplate: '<button class="btn primary" ng-click="grid.appScope.showMe()">Click Me</button>'},
      {name: 'btn3', cellTemplate: '<button class="btn primary" ng-click="grid.appScope.showMe()">Click Me</button>'}
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

    Movies.query(function(results){
      console.log("Query",arguments);
      results.forEach(function(result){
        $scope.gridOptions.data.push(result);
      })
    });

    $scope.$watch('filterValue', function () {
      $scope.gridApi.grid.refresh();
    });

    $scope.singleFilter = function (renderableRows) {
      var matcher = new RegExp($scope.filterValue);
      renderableRows.forEach(function (row) {
        if (!row.entity["name"].match(matcher)) {
          row.visible = false;
        }
      });
      return renderableRows;
    };

    /*
     $http.get('/data/100.json')
     .success(function(data) {
     $scope.gridOptions.data = data;
     });
     */
  }]);
})();