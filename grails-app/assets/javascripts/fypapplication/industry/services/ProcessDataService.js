/**
 * Created by Kulsoom on 22/03/2017.
 */
angular.module("fypapplication.industry")
    .factory("ProcessFactory", ProcessFactory);

function ProcessFactory(DomainServiceFactory) {
    return DomainServiceFactory('/process/:action', {action: '@action'},
        {"show": {method: "GET"}},
        {"save": {method: "POST"}},
        {"delete": {method: "DELETE"}}
    );
}