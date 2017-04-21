/**
 * Created by Kulsoom on 19/04/2017.
 */
angular.module("fypapplication.industry")
    .factory("EmpResultsFactory", ["$http", function ($http) {

        var EmpResultsFactory = function (industry) {
            return $http.get("http://api.adzuna.com:80/v1/api/jobs/gb/histogram?app_id=fac32a55&app_key=24eb5252096a41c8156ba154c1fe7e73&what=" + industry)
        };

        return EmpResultsFactory
    }]);

