/**
 * Created by Kulsoom on 30/01/2017.
 */
angular.module("fypapplication.industry")
    .factory("IndustryDataFactory", IndustryDataFactory)
    .factory("SectorFactory", SectorFactory);

function IndustryDataFactory($http) {
    return {
        get: function() {
            return $http({method: "GET", url: "industry/getIndustryData"});
        }
    }
}

function SectorFactory($http) {
    return{
        get:function () {
            return $http({method: "GET", url: "industry/getSectorList"});
        }
    }
}