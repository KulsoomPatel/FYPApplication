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
    vm.showSectorArea = false;
    vm.industries = [];
    vm.oneIndustry = undefined;


    SectorFactory.get().then(function (response) {
        vm.sectorList = response.data;
    });

    vm.getIndustryList = function (sectorName) {

        GetIndustries.get(sectorName).then(function (response) {
            vm.industryList = response.data;
            vm.showSectorArea = true;
        })
    };

    vm.updateSelected = function (industry) {
        if (vm.oneIndustry) {

            vm.industries.push(industry)
        }
        else{
            vm.industries.pop(industry)
        }


    }

}