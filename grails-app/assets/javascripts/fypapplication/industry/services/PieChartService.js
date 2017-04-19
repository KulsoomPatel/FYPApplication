/**
 * Created by Kulsoom on 19/04/2017.
 */

angular.module("fypapplication.industry")
    .factory("PieChartFactory", function () {
        var PieChartFactory = function (theIndustries, count) {

            var chartData = [];

            for (i = 0; i < theIndustries.length; i++) {
                chartData.push({c: [{v: theIndustries[i]}, {v: count[i]}]});
            }

            return chartData;
        };

        return PieChartFactory
    });

