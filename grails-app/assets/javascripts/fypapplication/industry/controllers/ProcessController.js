/**
 * Created by Kulsoom on 06/03/2017.
 */

angular.module("fypapplication.industry")
    .controller("ProcessController", ["SharedList", "IndustryFactory", ProcessController]);

function ProcessController(SharedList, IndustryFactory) {

    var vm = this;
    vm.theIndustries = SharedList;

    IndustryFactory.show({theIndustries: vm.theIndustries, action: 'displayData'}, function (response) {

        vm.theData = response.data;

    });
}
