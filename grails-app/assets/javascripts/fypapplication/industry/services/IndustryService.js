/**
 * Created by Kulsoom on 30/01/2017.
 */
angular.module("fypapplication.industry")
    .factory("SectorFactory", SectorFactory)
    .factory("IndustryFactory", IndustryFactory);


function SectorFactory($http) {
    return {
        get: function () {
            return $http({method: "GET", url: "industry/getSectorList"});
        }
    }
}

function IndustryFactory(DomainServiceFactory) {
    return DomainServiceFactory('/industry/:action',{action:'@action'},
        {"show": {method: "GET"}},
        {"save": {method: "POST"}},
        {"delete": {method: "DELETE"}}
    );
}
