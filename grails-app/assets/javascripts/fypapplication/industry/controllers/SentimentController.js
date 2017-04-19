/**
 * Created by Kulsoom on 22/03/2017.
 */

angular.module("fypapplication.industry")
    .controller("SentimentController", ["ProcessFactory", "SentimentFactory", "$localStorage", "PreviousEmpFactory", "$http", SentimentController]);

function SentimentController(ProcessFactory, SentimentFactory, $localStorage, PreviousEmpFactory, $http) {

    var vm = this;
    vm.selectedIndustry = undefined;
    vm.displayChart = false;

    vm.displayDate = $localStorage.theDate;
    vm.theIndustries = $localStorage.myIndustries;

    ProcessFactory.list({theIndustries: vm.theIndustries, action: 'displaySentiment'}, function (response) {
        vm.sentimentResults = response;
        vm.drawSentimentResults()

    });

    ProcessFactory.get({action: 'cleanWordClouds'}, function () {
    });

    vm.drawSentimentResults = function () {

        vm.myChartObject = {};

        vm.myChartObject.type = "BarChart";

        vm.myChartObject.data = SentimentFactory(vm.sentimentResults, vm.theIndustries);

        vm.myChartObject.options = {
            'title': 'Sentiment Analysis of the Industries',
            isStacked: true
        };
    };

    vm.employmentStats = function () {

        vm.displayChart = true;
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
            ], "rows": PreviousEmpFactory(vm.previousEmploymentStats)
        };

        vm.cloudChartData();
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
            'title': 'Number of Vacancies and Salaries for ' + vm.selectedIndustry,
            series: {
                0: {color: '#009900'}
            }
        };

        vm.employmentChartObject.data = {
            "cols": [
                {id: "v", label: "Salary", type: "number"},
                {id: "s", label: "Vacancies", type: "number"}
            ], "rows": vm.processData(vm.employmentResult)
        };

    };


    vm.cloudChartData = function () {

        ProcessFactory.get({action: 'createWordCloud', theIndustry: vm.selectedIndustry}, function () {

            ProcessFactory.list({action: 'getWordClouds'}, function (response) {
                vm.wordCloud = response
            })
        })

    };
}