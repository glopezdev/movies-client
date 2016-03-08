(function() {
  var app = angular.module('movieClientService', ['ngResource']);
  app.constant('apiUrl', 'http://localhost:3000');

    app.factory('Movies', ['$resource', 'apiUrl', function($resource, apiUrl) {
        return $resource(apiUrl+'/api/movies/:id/', {
            id: '@_id'
        }, {
            get: {
                method: 'GET'
            },
            update: {
                method: 'PUT'
            },
            delete: {
                method: 'DELETE'
            }
        })
    }]);
})();