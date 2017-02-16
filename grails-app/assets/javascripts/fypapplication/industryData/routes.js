/**
 * Created by Kulsoom on 14/02/2017.
 */


angular.module("fypapplication.industrydata")
    .config(function ($routeProvider) {
        $routeProvider.when('/insertIndustryData', {
            templateUrl: "/fypapplication/industryData/InsertIndustryData.html",
            controller: "IndustryDataController as ctrl"
        })
    });