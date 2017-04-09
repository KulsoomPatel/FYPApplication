/**
 * Created by Kulsoom on 30/01/2017.
 */

angular.module("fypapplication.industry")
    .controller("IndustryController", ['IndustryFactory', '$location', 'SharedList', IndustryController]);

function IndustryController(IndustryFactory, $location, SharedList) {

    //Pass a list and post these values to begin
    var vm = this;
    vm.sectorList = [];
    vm.selected = undefined;
    vm.showProgress = false;

    vm.showIndustryArea = false;


    //Assign an empty list
    vm.industries = [];

    IndustryFactory.list({action: 'getSectorList'}, function (response) {
        vm.sectorList = response;

    });

    vm.getIndustryList = function (sectorName) {

        IndustryFactory.list({sectorName: sectorName, action: 'getIndustryList'}, function (res) {

            vm.industryList = res;
            vm.showIndustryArea = true;
            vm.sectorName = vm.selected;

        }, function () {
            vm.errorMsg = "An error occurred";
        })
    };

    // Toggle selection for a given Industry
    vm.toggleSelection = function toggleSelection(industry) {
        var idx = vm.industries.indexOf(industry.name);

        // Is currently selected
        if (idx > -1) {
            vm.industries.splice(idx, 1);
            vm.count = vm.industries.length;
        }

        // Is newly selected
        else {
            vm.industries.push(industry.name);
            vm.count = vm.industries.length;
        }
    };

    vm.getTwitterData = function () {

        SharedList.delete({action: 'deleteListData'}, function () {

            SharedList.show({theIndustries: vm.industries, action: 'insertListData'}, function () {
                vm.showProgress = true;

                IndustryFactory.show({theIndustries: vm.industries, action: 'getIndustryData'}, function () {

                    $location.path("/processData/");
                })
            });
        });
    };
}