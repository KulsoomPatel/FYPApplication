/**
 * Created by Kulsoom on 14/02/2017.
 */

angular.module("fypapplication.industrydata")
    .controller("IndustryDataController", IndustryDataController)
    .filter("offset", offset);


function offset() {
    return function (input, start) {
        return input.slice(start);
    };
}

function IndustryDataController(IndustryFactory, SectorDataFactory) {
    var vm = this;

    vm.selected = undefined;
    vm.showIndustryArea = false;
    vm.industry = undefined;
    vm.industryName = undefined;
    vm.currentPage = 1;
    vm.itemsPerPage = 5;

    IndustryFactory.list({action: 'getSectorList'}, function (response) {
        vm.sectorList = response;
        vm.totalItems = vm.sectorList.length;
    });

    vm.getIndustryList = function (sectorName) {

        IndustryFactory.list({sectorName: sectorName, action: 'getIndustryList'}, function (list) {
            vm.industryList = list;
            vm.showIndustryArea = true;
            vm.sectorName = vm.selected;
        })
    };

    vm.getTheSector = function () {
        SectorDataFactory.get({action: 'getSector', sectorName: vm.selected}, function (response) {
            vm.industry.sector = response.theSector;

            vm.saveTheIndustry()
        });


    };

    vm.saveTheIndustry = function () {
        SectorDataFactory.save({action: 'saveIndustry'}, vm.industry, function (response) {
            vm.responseMessage = response.theMessage;
            vm.getIndustryList(vm.selected)
        });
    };

    vm.deleteIndustry = function () {
        SectorDataFactory.delete({industryName: vm.industryName, action: 'deleteIndustry'}, function (response) {
            vm.deleteMessage = response.theMessage;
            vm.getIndustryList(vm.selected)
        })
    }
}
