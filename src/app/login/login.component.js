(function() {
    'use strict';
    
    /**
     * Login Component Definition
     */
    angular
        .module('app')
        .component('login', {
            templateUrl: 'app/login/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        });    
})();