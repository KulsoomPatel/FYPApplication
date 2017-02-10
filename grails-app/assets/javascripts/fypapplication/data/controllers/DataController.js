/**
 * Created by Kulsoom on 09/02/2017.
 */
angular.module("fypapplication.data")
    .controller("DataController", DataController);

function DataController(SectorFactory) {

    var vm = this;
    SectorFactory.get().then(function (response) {
        vm.sectorList = response.data;
    });
}