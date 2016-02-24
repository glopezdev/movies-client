(function() {
    var app = angular.module('movieClientService', ['ngResource']);
    app.factory('Movies', ['$resource', function($resource) {
        return $resource('http://localhost:3000/api/movies/:id/', {
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