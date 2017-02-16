/**
 * Created by Kulsoom on 09/02/2017.
 */

angular.module("fypapplication.sectordata")
    .config(function ($routeProvider) {
        $routeProvider.when('/insertSectorData', {
            templateUrl: "/fypapplication/sectorData/InsertData.html",
            controller: "SectorDataController as ctrl"
        })
    });