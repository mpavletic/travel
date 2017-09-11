(function() {
    'use strict';

    angular
        .module('app')
        .factory('HotelListService', HotelListService);

    HotelListService.$inject = ['$http', 'API'];
    function HotelListService($http, API)  {
        var service = {
            search:search
        };
        
        return service;

        /**
         * Make a GET request to service to obtain a list of hotels given some
         * parameters.
         * 
         * @param {Object} params   Search Data Information
         */
        function search(params) {
            // checkin and checkout are dates object
            // we need only date part in ISO format "2017-09-11T00:30:55.194Z" => ['2017-09-11', '00:30:55.194Z']

            return $http.get(API.url + 'api/v1/hotels.json', {
                params: {
                    guests: params.guests,
                    checkin: params.checkin.toISOString().split('T')[0],
                    checkout: params.checkout.toISOString().split('T')[0],
                    destination: params.destination,
                    latitude: params.latitude,
                    longitude: params.longitude,
                    keyword: params.keyword,
                    rooms: params.rooms,
                    sort_criteria: params.sortCriteria,
                    sort_order: params.sortOrder,
                    per_page: params.perPage,
                    page: params.page,
                    currency: params.currency,
                    price_low: params.priceLow,
                    price_high: params.priceHigh
                },
                headers: {
                    'X-API-CALL': true
                }
            }).then(function(response) {
                return response.data;
            });
        }
    }
})();