/**
 * Created by Kulsoom on 19/04/2017.
 */
angular.module("fypapplication.industry")
    .factory("SentimentFactory", function () {
            var SentimentFactory = function (sentimentResults, theIndustries) {

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

                        angular.forEach(theIndustries, function (industry) {
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

            return SentimentFactory
        }
    );