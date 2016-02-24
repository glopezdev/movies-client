(function() {
  console.log("list.controller");
  var app = angular.module('movieClientAppList', ['ngTouch', 'ui.grid','movieClientService']);
  app.controller('ListController', ['$scope','Movies', function ($scope, Movies) {

    $scope.showMovie = showMovie;
    $scope.editMovie = editMovie;
    $scope.deleteMovie = deleteMovie;
    $scope.gridOptions = {};
    $scope.gridOptions.data = [];
    $scope.gridOptions.onRegisterApi = onRegisterApi;
    $scope.gridOptions.columnDefs = [
      {name: 'id'},
      {name: 'name'},
      {name: 'details', cellTemplate: '<button class="btn primary" ng-click="grid.appScope.showMovie()">View Me</button>'},
      {name: 'edit', cellTemplate: '<button class="btn primary" ng-click="grid.appScope.editMovie()">Edit Me</button>'},
      {name: 'delete', cellTemplate: '<button class="btn primary" ng-click="grid.appScope.deleteMovie(row)">Delete Me</button>'}
    ];
    $scope.singleFilter = filter;

    return init();

    function init () {
      Movies.query(function(results){
        console.log("Query",arguments);
        results.forEach(function(result){
          result.id = result._id; //ugly hack, should be dealt with on the grid
          $scope.gridOptions.data.push(result);
        })
      });

      $scope.$watch('filterValue', refreshGrid);
    }
    function refreshGrid () {
      $scope.gridApi.grid.refresh();
    }

    function onRegisterApi(gridApi) {
      $scope.gridApi = gridApi;
      $scope.gridApi.grid.registerRowsProcessor($scope.singleFilter, 200);
    }

    function filter(renderableRows) {
      var matcher = new RegExp($scope.filterValue);
      renderableRows.forEach(function (row) {
        if (!row.entity["name"].match(matcher)) {
          row.visible = false;
        }
      });
      return renderableRows;
    }

    function deleteMovie (row) {
      console.log("delete Movie ",row);
      row.entity.$delete(null, function(){
        var index = $scope.gridOptions.data.indexOf(row.entity);
        $scope.gridOptions.data.splice(index, 1);
      });
    }

    function showMovie() {
      alert('showMovie');
    }

    function editMovie() {
      alert('editMovie!');
    }

  }]);
})();