/**
 * Created by Kulsoom on 09/02/2017.
 */

angular.module("fypapplication.data")
    .config(function ($routeProvider) {
        $routeProvider.when('/insertData', {
            templateUrl: "/fypapplication/data/InsertData.html",
            controller: "DataController as ctrl"
        })
    });