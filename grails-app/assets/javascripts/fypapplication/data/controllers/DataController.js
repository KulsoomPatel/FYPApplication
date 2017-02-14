/**
 * Created by Kulsoom on 09/02/2017.
 */
angular.module("fypapplication.data")
    .controller("DataController", DataController);

function DataController(SectorFactory, DataFactory) {

    var vm = this;
    SectorFactory.get().then(function (response) {
        vm.sectorList = response.data;
    });

    vm.sector = undefined;

    vm.saveTheSector = function () {

        DataFactory.save({action: 'saveSector'}, vm.sector, function (res) {
            vm.responseMessage = res.message;
        })
    };
}