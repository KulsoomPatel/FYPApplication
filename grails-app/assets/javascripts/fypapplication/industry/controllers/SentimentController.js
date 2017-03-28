/**
 * Created by Kulsoom on 22/03/2017.
 */

angular.module("fypapplication.industry")
    .controller("SentimentController", ["ProcessFactory", "SharedList", SentimentController]);

function SentimentController(ProcessFactory, SharedList) {

    var vm = this;

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
            angular.forEach(vm.theIndustries, function (value) {
                industryTitle.push(value)
            });

            industryTitle.push({role: 'annotation'});
            results.push(industryTitle);

            for (i = 0; i < sentimentResults.length; i++) {
                var eachResult = sentimentResults[i];

                var sentimentValues = [eachResult.sentimentType];
                angular.forEach(eachResult.industryCount, function (key, value) {
                    sentimentValues.push(key);
                });
                sentimentValues.push(' ');
                results.push(sentimentValues)
            }

            return results;
        };

/*        [
            ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
                'Western', 'Literature', { role: 'annotation' } ],
            ['2010', 10, 24, 20, 32, 18, 5, ''],
            ['2020', 16, 22, 23, 30, 16, 9, ''],
            ['2030', 28, 19, 29, 30, 12, 13, '']
        ]*/

        vm.myChartObject = {};

        vm.myChartObject.type = "BarChart";

        vm.myChartObject.data = processData(vm.sentimentResults);

        vm.myChartObject.options = {
            'title': 'Sentiment Analysis of the Industries',
            isStacked: true
        };
    }


}