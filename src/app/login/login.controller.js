(function() {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', 'AirlineService', 'LoginService'];
    
    function LoginController($scope, AirlineService, LoginService) {
        var vm = this;

        vm.credentials = {
            username: '',
            password: '',
            rememberMe: true,
            airline: ''
        };

        vm.airlines = [];

        vm.login = login;

        vm.$onInit = onInit;

        /**
         * Request to login service and redirects to search section
         */
        function login() {
            LoginService.login(vm.credentials).then(function(payload) {
                console.log(payload);
            }).catch(function(error) {
                console.log(error);
            });
        }
        
        /**
         * Load list of airlines and choose first one as default
         */
        function onInit() {
            AirlineService.getAll().then(function(airlines) {
                vm.airlines = airlines || [];
    
                if (vm.airlines.length > 0) {
                    vm.credentials.airline = vm.airlines[0];
                }
            }).catch(function(error) {
                console.log(error);
            });
        }
    }
})();