/**
 * Created by Kulsoom on 14/02/2017.
 */

angular.module("fypapplication.industrydata")
    .controller("IndustryDataController", IndustryDataController);

function IndustryDataController(IndustryFactory, SectorDataFactory) {
    var vm = this;

    vm.selected = undefined;
    vm.showIndustryArea = false;
    vm.industry = undefined;

    IndustryFactory.list({action: 'getSectorList'}, function (response) {
        vm.sectorList = response;
    });

    vm.getIndustryList = function (sectorName) {

        IndustryFactory.list({sectorName: sectorName, action: 'getIndustryList'}, function (list) {
            vm.industryList = list;
            vm.showIndustryArea = true;
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
        });
    };
}
