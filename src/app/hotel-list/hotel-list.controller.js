(function() {
    'use strict';

    angular
        .module('app')
        .controller('HotelListController', HotelListController);

    HotelListController.$inject = ['$cookies', '$state', 'HotelListService'];
    function HotelListController($cookies, $state, HotelListService) {
        var vm = this;

        vm.data = {
            guests: 1,
            checkin: null,
            checkout: null,
            destination: '',
            rooms: 1,
            keyword: '',
            longitude: '',
            latitude: '',
            sortCriteria: 'Overall',
            sortOrder: 'desc',
            currency: 'USD',
            priceLow: '',
            priceHigh: ''
        };

        vm.pagination = {
            page: 1,
            perPage: 25
        };

        vm.checkinPopup = {
            opened: false
        };

        vm.checkoutPopup = {
            opened: false
        };

        vm.datePickerOptions = {
            minDate: new Date(),
            showWeeks: false
        };

        vm.datepickerModelOpts = {
            allowInvalid: false
        };

        vm.hotels = [];
        
        vm.$onInit = onInit;

        vm.openPopup = openPopup;

        vm.searchHotels = searchHotels;

        vm.logout = logout;

        function onInit() {
            console.log('Initialized');
        }

        /**
         * Set opened property to true to display datepicker popup
         * 
         * @param {Object} popup            Popup Object Information
         * @param {boolean} popup.opened    Datepicker popup is opened
         */
        function openPopup(popup) {
            popup.opened = true;
        }

        /**
         * Request to search service if entered information for search is valid.
         */
        function searchHotels() {
            if (!vm.searchForm.$valid) {
                return false;
            } else {
                vm.data.perPage = vm.pagination.perPage;
                vm.data.page = vm.pagination.page;
    
                HotelListService.search(vm.data).then(function(hotels) {
                    vm.hotels = hotels || [];
                }).catch(function(error) {
                    console.log(error);
                });
            }
        }

        /**
         * Clear cookies and redirect to login state.
         */
        function logout() {
            var keys = $cookies.getAll();

            angular.forEach(function(value, key) {
                $cookies.remove(key);
            });

            $state.go('app');
        }
    }
})();