(function() {
    'use strict';

    /**
     * Hotel List Component Definition
     */
    angular
        .module('app')
        .component('hotelList', {            
            templateUrl: 'app/hotel-list/hotel-list.html',
            controller: 'HotelListController',
            controllerAs: 'vm',
        });    
})();