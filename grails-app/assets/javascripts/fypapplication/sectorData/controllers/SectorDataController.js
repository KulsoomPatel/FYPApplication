/**
 * Created by Kulsoom on 09/02/2017.
 */
angular.module("fypapplication.sectordata")
    .controller("SectorDataController", SectorDataController);

function SectorDataController(SectorFactory, SectorDataFactory) {

    var vm = this;
    SectorFactory.get().then(function (response) {
        vm.sectorList = response.data;
    });

    vm.sector = undefined;

    vm.saveTheSector = function () {

        SectorDataFactory.save({action: 'saveSector'}, vm.sector, function (res) {
            vm.responseMessage = res.message;
        })
    };
}