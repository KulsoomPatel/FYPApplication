/**
 * Created by Kulsoom on 19/04/2017.
 */
angular.module("fypapplication.industry")
    .factory("PreviousEmpFactory", function () {
        var PreviousEmpFactory = function (theData) {
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
        }

        return PreviousEmpFactory
    });