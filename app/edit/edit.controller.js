(function(){
  var app = angular.module('movieClientAppEdit', ['movieClientService']);
  app.controller('EditController', ['$scope', '$stateParams', 'Movies', function($scope, $stateParams, Movies) {
    console.log("edit controller",$stateParams);
    $scope.movie = {
      id: $stateParams.id
    };

    return init();

    function init() {
      Movies.get({id:$stateParams.id},function(results) {
        console.log("Query", arguments);

      });
    }

  }]);
})();