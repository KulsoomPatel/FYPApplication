/**
 * Created by Kulsoom on 09/02/2017.
 */
angular.module("fypapplication.sectordata")
    .controller("SectorDataController", SectorDataController)
    .filter("offset", offset);


function offset() {
    return function (input, start) {
        return input.slice(start);
    };
}

function SectorDataController(SectorDataFactory, IndustryFactory) {

    var vm = this;
    vm.currentPage = 1;
    vm.itemsPerPage = 5;
    vm.sectorList = [];

    vm.listSector = function () {
        IndustryFactory.list({action: 'getSectorList'}, function (response) {
            vm.sectorList = response;
            vm.totalItems = vm.sectorList.length;

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