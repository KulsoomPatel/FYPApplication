/**
 * Created by Kulsoom on 30/01/2017.
 */
angular.module("fypapplication.industry")
    .config(function ($routeProvider) {
        $routeProvider
            .when('/liveData', {
            templateUrl: "/fypapplication/industry/ShowIndustryData.html",
            controller: "IndustryController as ctrl"
        }).when('/processData', {
            templateUrl: "/fypapplication/industry/ProcessPage.html",
            controller: "ProcessController as ctrl"
        }).when('/error', {
            templateUrl: "/fypapplication/industry/Error.html",
            controller: "IndustryController as ctrl"
        }).when('/', {
            templateUrl: "/fypapplication/industry/DisplaySentiment.html",
            controller: "SentimentController as ctrl"
        })
    });