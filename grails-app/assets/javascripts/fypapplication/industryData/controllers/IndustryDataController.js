/**
 * Created by Kulsoom on 14/02/2017.
 */

angular.module("fypapplication.industrydata")
    .controller("IndustryDataController", IndustryDataController);

function IndustryDataController(SectorFactory) {
    var vm = this;

    vm.selected = undefined;
    SectorFactory.get().then(function (response) {
        vm.sectorList = response.data;
    });
}