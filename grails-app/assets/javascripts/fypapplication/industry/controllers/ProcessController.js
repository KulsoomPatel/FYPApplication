/**
 * Created by Kulsoom on 06/03/2017.
 */

angular.module("fypapplication.industry")
    .controller("ProcessController", ["SharedList", "IndustryFactory", "ProcessFactory", "$location", ProcessController]);

function ProcessController(SharedList, IndustryFactory, ProcessFactory, $location) {

    var vm = this;

    SharedList.show({action: 'getList'}, function (response) {
        vm.theIndustries = response.savedIndustries;

        IndustryFactory.show({theIndustries: vm.theIndustries, action: 'displayData'}, function (response) {
                vm.theData = response.integerList;
                vm.drawChart();
            }
        );

    });

    vm.theData = [];

    vm.drawChart = function () {

        vm.processData = function (theIndustries, count) {

            var chartData = [];

            for (i = 0; i < theIndustries.length; i++) {
                chartData.push({c: [{v: theIndustries[i]}, {v: count[i]}]});
            }
            return chartData;
        };

        vm.myChartObject = {};
        vm.myChartObject.type = 'PieChart';
        vm.myChartObject.options = {
            'title': 'Categorisation of the Data Set'
        };

        vm.myChartObject.data = {
            "cols": [
                {id: "I", label: "Industry", type: "string"},
                {id: "N", label: "Counts", type: "number"}
            ], "rows": vm.processData(vm.theIndustries, vm.theData)
        };

    };

    vm.getSentiment = function () {
        ProcessFactory.show({theIndustries: vm.theIndustries, action: 'processForSentiment'}, function (response) {

            $location.path("/displaySentiment/");
        })
    }
}
