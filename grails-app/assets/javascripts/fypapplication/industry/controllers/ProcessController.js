/**
 * Created by Kulsoom on 06/03/2017.
 */

angular.module("fypapplication.industry")
    .controller("ProcessController", ["SharedList", "IndustryFactory", ProcessController]);

function ProcessController(SharedList, IndustryFactory) {

    var vm = this;
    vm.theIndustries = SharedList.getList();
    vm.theData = [];

    IndustryFactory.show({theIndustries: vm.theIndustries, action: 'displayData'}, function (response) {
            vm.theData = response.integerList;
            vm.drawChart();
        }
    );

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
            'title': 'Industry Mentions in the Data Set'
        };

        vm.myChartObject.data = {
            "cols": [
                {id: "I", label: "Industry", type: "string"},
                {id: "N", label: "Counts", type: "number"}
            ], "rows": vm.processData(vm.theIndustries, vm.theData)
        };

    };


}
