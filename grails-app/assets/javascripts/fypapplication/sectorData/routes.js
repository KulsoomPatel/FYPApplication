/**
 * Created by Kulsoom on 09/02/2017.
 */

angular.module("fypapplication.sectordata")
    .config(function ($routeProvider) {
        $routeProvider.when('/sectorData', {
            templateUrl: "/fypapplication/sectorData/SectorData.html",
            controller: "SectorDataController as ctrl"
        })
    });