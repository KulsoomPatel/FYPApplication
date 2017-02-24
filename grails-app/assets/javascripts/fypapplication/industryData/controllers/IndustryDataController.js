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

    vm.saveTheIndustry = function () {

        SectorDataFactory.get({action: 'getSector', sectorName: vm.selected}, function (response) {
            vm.data = response
        });

        vm.industry.sector = vm.data.sector;
        SectorDataFactory.save({action: 'saveIndustry'}, vm.industry, function (res) {
            vm.responseMessage = res.message;
        })
    };
}