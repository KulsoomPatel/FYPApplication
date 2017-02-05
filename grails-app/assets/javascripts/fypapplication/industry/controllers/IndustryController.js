/**
 * Created by Kulsoom on 30/01/2017.
 */

angular.module("fypapplication.industry")
    .controller("IndustryController", IndustryController);

function IndustryController(SectorFactory, GetIndustries) {

    //Pass a list and post these values to begin
    var vm = this;
    vm.sectorList = [];
    vm.selected = undefined;
    vm.showIndustryArea = false;
    vm.industries = [];




    SectorFactory.get().then(function (response) {
        vm.sectorList = response.data;
    });

    vm.getIndustryList = function (sectorName) {

        GetIndustries.get(sectorName).then(function (response) {
            vm.industryList = response.data;
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