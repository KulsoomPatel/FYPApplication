/**
 * Created by Kulsoom on 17/03/2017.
 */

angular.module("fypapplication.industry")
    .factory("SharedList", SharedList);


function SharedList(DomainServiceFactory) {
    return DomainServiceFactory('/myIndustries/:action', {action: '@action'},
        {"show": {method: "GET", ignoreLoadingBar: true}},
        {"save": {method: "POST"}},
        {"delete": {method: "DELETE",  ignoreLoadingBar: true}}
    );
}

