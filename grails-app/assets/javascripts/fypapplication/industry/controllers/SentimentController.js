/**
 * Created by Kulsoom on 22/03/2017.
 */

angular.module("fypapplication.industry")
    .controller("SentimentController", ["ProcessFactory", "SharedList", "$http", SentimentController]);

function SentimentController(ProcessFactory, SharedList, $http) {

    var vm = this;
    vm.selectedIndustry = undefined;
    vm.displayChart = false;

    SharedList.show({action: 'getList'}, function (response) {
        vm.theIndustries = response.savedIndustries;

        ProcessFactory.list({theIndustries: vm.theIndustries, action: 'displaySentiment'}, function (response) {
            vm.sentimentResults = response;
            vm.drawSentimentResults()


        });
    });

    ProcessFactory.get({action: 'cleanWordClouds'}, function () {
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


        vm.processData = function (theData) {

            var tableData = [];


            //Array into a new format so it can be sorted
            var makeNewArray = function () {

                var formattedData = [];
                angular.forEach(theData.month, function (key, value) {
                    formattedData.push({date: value, salary: key})
                });
                return formattedData;
            };

            var newArray = makeNewArray();

            newArray.sort(function (a, b) {
                return (a.date < b.date) ? -1 : ((a.date > b.date) ? 1 : 0);
            });

            angular.forEach(newArray, function (obj) {
                tableData.push({c: [{v: obj.date}, {v: obj.salary}]})
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