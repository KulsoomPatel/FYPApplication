/**
 * Created by Kulsoom on 14/02/2017.
 */


angular.module("fypapplication.industrydata")
    .config(function ($routeProvider) {
        $routeProvider.when('/industryData', {
            templateUrl: "/fypapplication/industryData/IndustryData.html",
            controller: "IndustryDataController as ctrl"
        })
    });