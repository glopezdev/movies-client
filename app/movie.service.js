(function() {
  var app = angular.module('movieClientService', ['ngResource', 'app.config']);

    app.factory('Movies', ['$resource', 'API_URL', function($resource, apiUrl) {
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