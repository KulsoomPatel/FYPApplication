/**
 * Created by Kulsoom on 30/01/2017.
 */
angular.module("fypapplication.industry")
    .factory("IndustryFactory", IndustryFactory);

function IndustryFactory(DomainServiceFactory) {
    return DomainServiceFactory('/industry/:action', {action: '@action'},
        {"show": {method: "GET"}},
        {"save": {method: "POST"}},
        {"delete": {method: "DELETE"}}
    );
}


