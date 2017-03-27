/**
 * Created by Kulsoom on 22/03/2017.
 */

angular.module("fypapplication.industry")
    .controller("SentimentController", ["ProcessFactory", SentimentController]);

function SentimentController(ProcessFactory) {

    var vm = this;

    ProcessFactory.list({action: 'displaySentiment'}, function (response) {
        vm.sentimentResults = response;
        drawSentimentResults()

    });

    vm.drawSentimentResults = function () {

        vm.myChartObject = {};

        vm.myChartObject.type = "ColumnChart";

        vm.myChartObject.options = {
            'title': 'Sentiment Results for Industries'
        };

        vm.processData = function (sentimentType, industry) {
            var chartData = [];

            for (i = 0; i < sentimentType.length; i++) {
                for (j = 0; j < industry.length; j++) {
                    chartData.push({c: [{v: sentimentType[i]}, {v: industry[j]}]})
                }
            }
            return chartData;
        };

        vm.myChartObject.data = {
            "cols": [
                {id: "I", label: "Industry", type: "string"},
                {id: "N", label: "Counts", type: "number"}
            ], "rows": vm.processData(vm.sentimentResults.sentimentType, vm.sentimentResults.industryCount)
        };

    };
}