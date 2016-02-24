(function(){
  var app = angular.module('movieClientAppDetails', ['movieClientService']);
  app.controller('DetailsController', ['$scope', '$stateParams', 'Movies', function($scope, $stateParams, Movies) {
    console.log("details controller",$stateParams);
    $scope.movie = {
      id: $stateParams.id
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