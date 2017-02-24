/**
 * Created by Kulsoom on 09/02/2017.
 */
angular.module("fypapplication.sectordata")
    .controller("SectorDataController", SectorDataController);

function SectorDataController(SectorDataFactory, IndustryFactory) {

    var vm = this;
    IndustryFactory.list({action: 'getSectorList'}, function (response) {
        vm.sectorList = response;
    });

    vm.sector = undefined;

    vm.saveTheSector = function () {
        SectorDataFactory.save({action: 'saveSector'}, vm.sector)
    };
}