/**
 * Created by Kulsoom on 22/03/2017.
 */

angular.module("fypapplication.industry")
    .controller("SentimentController", ["ProcessFactory", "SharedList", "$http", SentimentController]);

function SentimentController(ProcessFactory, SharedList, $http) {

    var vm = this;
    vm.selectedIndustry = undefined;

    vm.theIndustries = SharedList.getList();
    ProcessFactory.list({theIndustries: vm.theIndustries, action: 'displaySentiment'}, function (response) {
        vm.sentimentResults = response;
        vm.drawSentimentResults()


    });

    vm.drawSentimentResults = function () {
        var processData = function (sentimentResults) {
            var results = [];
            var industryTitle = ['Industry'];

            //put all of the industries as the chart title
            angular.forEach(sentimentResults[0].industryCount, function (key, value) {
                industryTitle.push(value)
            });

            industryTitle.push({role: 'annotation'});
            results.push(industryTitle);

            for (i = 0; i < sentimentResults.length; i++) {
                var eachResult = sentimentResults[i];

                var sentimentValues = [eachResult.sentimentType];
                angular.forEach(eachResult.industryCount, function (key, value) {

                    angular.forEach(vm.theIndustries, function (industry) {
                        if (industry === value) {
                            sentimentValues.push(key);
                        }
                    });

                });
                sentimentValues.push(' ');
                results.push(sentimentValues)
            }

            return results;
        };

        vm.myChartObject = {};

        vm.myChartObject.type = "BarChart";

        vm.myChartObject.data = processData(vm.sentimentResults);

        vm.myChartObject.options = {
            'title': 'Sentiment Analysis of the Industries',
            isStacked: true
        };
    };

    vm.employmentStats = function () {
        $http.get("http://api.adzuna.com:80/v1/api/jobs/gb/histogram?app_id=fac32a55&app_key=24eb5252096a41c8156ba154c1fe7e73&what=" + vm.selectedIndustry)
            .then(function (response) {
                vm.employmentResult = response.data;
                vm.drawHistogram();
            });

        $http.get("http://api.adzuna.com:80/v1/api/jobs/gb/history?app_id=fac32a55&app_key=24eb5252096a41c8156ba154c1fe7e73&what=" + vm.selectedIndustry + "&months=6")
            .then(function (response) {
                vm.previousEmploymentStats = response.data;
                vm.drawPreviousEmpResults();
            });
    };

    vm.drawPreviousEmpResults = function () {


        vm.processData = function (theData) {

            var tableData = [];

            angular.forEach(theData.month, function (key, value) {
                tableData.push({c: [{v: value}, {v: key}]})
            });

            return tableData;
        };

        vm.pastEmploymentChartObject = {};

        vm.pastEmploymentChartObject.type = "LineChart";

        vm.pastEmploymentChartObject.options = {
            'title': 'Previous 6 months Salary for ' + vm.selectedIndustry,
            curveType: 'function',
            legend: {position: 'bottom'},
            series: {
                0: {color: '#e2431e'}
            }
        };

        vm.pastEmploymentChartObject.data = {
            "cols": [
                {id: "v", label: "Month", type: "string"},
                {id: "s", label: "Salary", type: "number"}
            ], "rows": vm.processData(vm.previousEmploymentStats)
        };

    };

    vm.drawHistogram = function () {

        vm.processData = function (results) {

            var theData = [];

            angular.forEach(results.histogram, function (key, value) {
                theData.push({c: [{v: value}, {v: key}]})
            });

            return theData;
        };

        vm.employmentChartObject = {};

        vm.employmentChartObject.type = "ColumnChart";

        vm.employmentChartObject.options = {
            'title': 'Number of Vacancies and Salaries for ' + vm.selectedIndustry
        };

        vm.employmentChartObject.data = {
            "cols": [
                {id: "v", label: "Salary", type: "number"},
                {id: "s", label: "Vacancies", type: "number"}
            ], "rows": vm.processData(vm.employmentResult)
        };

    };


}