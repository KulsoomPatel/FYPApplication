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

    SectorFactory.get().then(function (response) {
        vm.sectorList = response.data;
    });

    vm.getIndustryList = function (sectorName) {

        GetIndustries.get(sectorName).then(function (response) {
            vm.industryList = response.data;
        })
    }

}