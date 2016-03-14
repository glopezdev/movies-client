(function(){
  var app = angular.module('movieClientAppEdit', ['movieClientService']);
  app.controller('EditController', ['$scope', '$stateParams', 'Movies', '$state', function($scope, $stateParams, Movies, $state) {
    console.log("edit controller",$stateParams);
    $scope.movie = {
      id: $stateParams.id
    };
    $scope.submit = formSubmit;

    return init();

    function init() {
      Movies.get({id:$stateParams.id},function(result) {
        console.log("Query", arguments);
        $scope.movie = result;
      },
      function() {
        console.log("fetch error ",arguments);
        alert("Something went wrong fetching movie: "+$stateParams.id)
      });
    }

    function formSubmit() {
      $scope.movie.$update(
        function() {
          $state.go('list');
        },
        function() {
          console.log("update error ",arguments);
          alert("Something went wrong updating movie: "+$stateParams.id)
        }
      );
    }

  }]);
})();