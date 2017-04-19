/**
 * Created by Kulsoom on 06/03/2017.
 */

angular.module("fypapplication.industry")
    .controller("ProcessController", ["$localStorage", "IndustryFactory", "ProcessFactory", "PieChartFactory", "$location", ProcessController]);

function ProcessController($localStorage, IndustryFactory, ProcessFactory, PieChartFactory, $location) {

    var vm = this;


    vm.theIndustries = $localStorage.myIndustries;

    IndustryFactory.show({theIndustries: vm.theIndustries, action: 'displayData'}, function (response) {
            vm.theData = response.integerList;
            vm.drawChart();
        }
    );


    vm.theData = [];

    vm.drawChart = function () {

        vm.myChartObject = {};
        vm.myChartObject.type = 'PieChart';
        vm.myChartObject.options = {
            'title': 'Categorisation of the Data Set'
        };

        vm.myChartObject.data = {
            "cols": [
                {id: "I", label: "Industry", type: "string"},
                {id: "N", label: "Counts", type: "number"}
            ], "rows": PieChartFactory(vm.theIndustries, vm.theData)
        };
    };

    vm.getSentiment = function () {
        ProcessFactory.show({theIndustries: vm.theIndustries, action: 'processForSentiment'}, function (response) {

            $location.path("/");
        })
    }
}
