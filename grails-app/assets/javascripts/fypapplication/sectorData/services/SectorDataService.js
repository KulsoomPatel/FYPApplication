/**
 * Created by Kulsoom on 10/02/2017.
 */
angular.module("fypapplication.sectordata")
    .factory("SectorDataFactory", SectorDataFactory);


function SectorDataFactory(DomainServiceFactory) {
    return DomainServiceFactory('/data/:action', {action: '@action'},
        {"show": {method: "GET"}},
        {"save": {method: "POST"}},
        {"delete": {method: "DELETE"}}
    );
}