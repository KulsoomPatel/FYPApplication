/**
 * Created by Kulsoom on 30/01/2017.
 */

angular.module("fypapplication.industry")
    .controller("IndustryController", IndustryController);

function IndustryController(SectorFactory) {

    //Pass a list and post these values to begin
    var vm = this;
    vm.sectorList = [];
    vm.selected = undefined;

    SectorFactory.get().then(function (response) {
        vm.sectorList = response.data;
    })

}