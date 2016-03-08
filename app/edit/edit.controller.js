(function(){
  var app = angular.module('movieClientAppEdit', ['movieClientService']);
  app.controller('EditController', ['$scope', '$stateParams', 'Movies', '$state', function($scope, $stateParams, Movies, $state) {
    console.log("edit controller",$stateParams);
    $scope.movie = {
      id: $stateParams.id
    };
    $scope.submit = function() {
      $scope.movie.$update();
      $state.go('list');
    };

    return init();

    function init() {
      Movies.get({id:$stateParams.id},function(result) {
        console.log("Query", arguments);
        $scope.movie = result;
      });
    }

  }]);
})();