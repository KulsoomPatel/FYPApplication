/**
 * Created by Kulsoom on 19/04/2017.
 */
angular.module("fypapplication.industry")
    .factory("HistogramFactory", function () {
        var HistogramFactory = function (results) {
            var theData = [];

            angular.forEach(results.histogram, function (key, value) {
                theData.push({c: [{v: value}, {v: key}]})
            });

            return theData;
        };

        return HistogramFactory
    });