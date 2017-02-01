/**
 * Created by Kulsoom on 30/01/2017.
 */

angular.module("fypapplication.industry")
    .controller("IndustryController", IndustryController);

function IndustryController(IndustryDataFactory, SectorFactory) {

    //Pass a list and post these values to begin
    var vm = this;
    vm.sectorList = [];

    vm.populateList = function () {
        SectorFactory.get().then(function (response) {

            vm.sectorList = response.data;
        })
    };

    vm.getData = function () {
        IndustryDataFactory.get().then(function (response) {

        })
    };
}