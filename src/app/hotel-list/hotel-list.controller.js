(function() {
    'use strict';

    angular
        .module('app')
        .controller('HotelListController', HotelListController);

    HotelListController.$inject = ['HotelListService'];
    function HotelListController(HotelListService) {
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

        function onInit() {
            console.log('Initialized');
        }

        function openPopup(popup) {
            popup.opened = true;
        }

        function searchHotels() {
            if (!vm.form.$valid) {
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
    }
})();