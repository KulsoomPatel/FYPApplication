/**
 * Created by Kulsoom on 30/01/2017.
 */

angular.module("fypapplication.industry")
    .controller("IndustryController", IndustryController);

function IndustryController(IndustryFactory) {

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

    IndustryFactory.list({action: 'getSectorList'}, function (response) {
        vm.sectorList = response;
    });


    vm.getIndustryList = function (sectorName) {

        IndustryFactory.list({sectorName: sectorName, action: 'getIndustryList'}, function (res) {

            if (res) {
                vm.industryList = res;
                vm.showIndustryArea = true;
                vm.sectorName = vm.selected;
            }
        }, function () {
            vm.errorMsg = "No industries found in " + vm.selected;
        })
    };

    // Toggle selection for a given Industry
    vm.toggleSelection = function toggleSelection(industry) {
        var idx = vm.industries.indexOf(industry.name);

        // Is currently selected
        if (idx > -1) {
            vm.industries.splice(idx, 1);
            vm.count = vm.industries.length;
        }

        // Is newly selected
        else {
            vm.industries.push(industry.name);
            vm.count = vm.industries.length;
        }
    };

}