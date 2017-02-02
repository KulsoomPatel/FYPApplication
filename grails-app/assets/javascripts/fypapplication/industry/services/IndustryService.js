/**
 * Created by Kulsoom on 30/01/2017.
 */
angular.module("fypapplication.industry")
    .factory("IndustryDataFactory", IndustryDataFactory)
    .factory("SectorFactory", SectorFactory)
    .factory("GetIndustries", GetIndustries);

function IndustryDataFactory($http) {
    return {
        get: function () {
            return $http({method: "GET", url: "industry/getIndustryData"});
        }
    }
}

function GetIndustries($http) {
    return {
        get: function (sectorName) {
            return $http({method: "GET", url: "industry/getIndustryList?sectorName=" +sectorName});

        }
    }
}


function SectorFactory($http) {
    return {
        get: function () {
            return $http({method: "GET", url: "industry/getSectorList"});
        }
    }
}