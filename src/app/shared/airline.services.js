(function() {
    'use strict';

    angular
        .module('app')
        .factory('AirlineService', AirlineService);

    AirlineService.$inject = ['$http', 'API'];
    
    function AirlineService($http, API) {
        var service = {
            getAll: getAll
        };
        
        return service;

        /**
         * Return a list of airlines
         */
        function getAll() { 
            return $http.get(API.url + 'airlines').then(function(response) {
                return response.data;
            });
        }
    }
})();