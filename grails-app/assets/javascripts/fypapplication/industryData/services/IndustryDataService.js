/**
 * Created by Kulsoom on 15/02/2017.
 */

angular.module("fypapplication.industrydata")
    .factory("IndustryDataFactory", IndustryDataFactory);


function IndustryDataFactory(DomainServiceFactory) {
    return DomainServiceFactory('/industryData/:action', {action: '@action'},
        {"show": {method: "GET"}},
        {"save": {method: "POST"}},
        {"delete": {method: "DELETE"}}
    );
}