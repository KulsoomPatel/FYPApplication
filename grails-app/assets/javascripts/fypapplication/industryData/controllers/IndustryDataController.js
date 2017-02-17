/**
 * Created by Kulsoom on 14/02/2017.
 */

angular.module("fypapplication.industrydata")
    .controller("IndustryDataController", IndustryDataController);

function IndustryDataController(SectorFactory, IndustryFactory, SectorDataFactory) {
    var vm = this;

    vm.selected = undefined;
    vm.showIndustryArea = false;
    vm.industry = undefined;
    SectorFactory.get().then(function (response) {
        vm.sectorList = response.data;
    });

    vm.getIndustryList = function (sectorName) {

        IndustryFactory.list({sectorName: sectorName, action: 'getIndustryList'}, function (list) {
            vm.industryList = list;
            vm.showIndustryArea = true;
            vm.sectorName = vm.selected;
        })
    };

    vm.saveTheIndustry = function () {

        SectorDataFactory.show({
            action: "getSector",
            sectorName: vm.sectorName
        }, function (theSector) {
            vm.industry.sector= theSector
        });

        SectorDataFactory.save({action: 'saveIndustry'}, vm.industry, function (res) {
            vm.responseMessage = res.message;
        })
    };
}