(function() {
    'use strict';

    angular
        .module('app')
        .factory('LoginService', LoginService);

    LoginService.$inject = ['$http', 'API'];
    
    function LoginService($http, API) {
        var service = {
            login: login
        };

        return service;

        /**
         * Get user details
         * 
         * @param {Object} credentials              User's Login Credentials
         * @param {string} credentials.username     Username
         * @param {string} credentials.password     Password
         * @param {Object} credentials.airline      Airline Information
         * @param {boolean} credentials.rememberMe  Indicate if user should be remember
         */
        function login(credentials) {
            return $http.post(API.url + 'session.json', {
                username: credentials.username,
                airline: credentials.airline ? credentials.airline.display_name : '',
                password: credentials.password,
                remember_me: credentials.rememberMe
            }, {
                headers: {
                    'X-API-CALL': true
                },
                withCredentials: true
            }).then(function(response) {
                return response.data;
            });
         }
    }
})();