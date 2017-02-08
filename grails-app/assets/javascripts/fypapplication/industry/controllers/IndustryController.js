/**
 * Created by Kulsoom on 30/01/2017.
 */

angular.module("fypapplication.industry")
    .controller("IndustryController", IndustryController);

function IndustryController(SectorFactory, IndustryFactory) {

    //Pass a list and post these values to begin
    var vm = this;
    vm.sectorList = [];
    vm.selected = undefined;
    vm.showIndustryArea = false;
    vm.industries = [];

    vm.getTwitterData = function () {
        IndustryFactory.show({theIndustries: vm.industries, action: 'getIndustryData'}, function (response) {
            vm.gettingData = response.searchStatus;
        })
    };

    SectorFactory.get().then(function (response) {
        vm.sectorList = response.data;
    });

    vm.getIndustryList = function (sectorName) {

        IndustryFactory.list({sectorName: sectorName, action: 'getIndustryList'}, function (list) {
            vm.industryList = list;
            vm.showIndustryArea = true;
            vm.sectorName = vm.selected;
        })
    };


    // Toggle selection for a given Industry
    vm.toggleSelection = function toggleSelection(industry) {
        var idx = vm.industries.indexOf(industry);

        // Is currently selected
        if (idx > -1) {
            vm.industries.splice(idx, 1);
            vm.count = vm.industries.length;
        }

        // Is newly selected
        else {
            vm.industries.push(industry);
            vm.count = vm.industries.length;
        }
    };

}