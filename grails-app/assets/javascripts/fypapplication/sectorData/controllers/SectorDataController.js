/**
 * Created by Kulsoom on 09/02/2017.
 */
angular.module("fypapplication.sectordata")
    .controller("SectorDataController", SectorDataController);

function SectorDataController(SectorDataFactory, IndustryFactory) {

    var vm = this;

    vm.listSector = function () {
        IndustryFactory.list({action: 'getSectorList'}, function (saveMessage) {
            vm.sectorList = saveMessage;
        });
    };

    vm.sector = undefined;
    vm.sectorName = undefined;

    vm.saveTheSector = function () {
        SectorDataFactory.save({action: 'saveSector'}, vm.sector, function (response) {
            vm.responseMessage = response.theMessage;
            vm.listSector();
        })
    };

    vm.getSectorIndustries = function () {
        IndustryFactory.list({sectorName: vm.sectorName, action: 'getIndustryList'}, function (list) {
            vm.industryList = list;
        })
    };

    vm.deleteSector = function () {
        SectorDataFactory.delete({sectorName: vm.sectorName, action: 'deleteSector'}, function (response) {
            vm.deleteMessage = response.theMessage;
            vm.listSector();
        })
    }
}