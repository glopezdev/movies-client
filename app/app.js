(function() {
  var app = angular.module('movieClientApp', ['ngTouch', 'ui.grid','movieClientService']);
  app.controller('MainCtrl', ['$scope','Movies', function ($scope, Movies) {

    $scope.showMovie = showMovie;
    $scope.editMovie = editMovie;
    $scope.deleteMovie = deleteMovie;
    $scope.gridOptions = {};

    return init();

    function init () {
      $scope.gridOptions.onRegisterApi = function (gridApi) {
        $scope.gridApi = gridApi;
        $scope.gridApi.grid.registerRowsProcessor($scope.singleFilter, 200);
      }

      $scope.gridOptions.columnDefs = [
        {name: 'name'},
        {name: 'gender'},
        {name: 'year'},
        {name: 'details', cellTemplate: '<button class="btn primary" ng-click="grid.appScope.showMovie()">View Me</button>'},
        {name: 'edit', cellTemplate: '<button class="btn primary" ng-click="grid.appScope.editMovie()">Edit Me</button>'},
        {name: 'delete', cellTemplate: '<button class="btn primary" ng-click="grid.appScope.deleteMovie(row)">Delete Me</button>'}
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
    }

    function deleteMovie (row) {
      console.log("delete Movie ",row);
      // Movies.delete(row.entity._id);
      row.entity.$delete();
    }

    function showMovie() {
      alert('showMovie');
    }

    function editMovie() {
      alert('editMovie!');
    }

  }]);
})();