//= wrapped
//= require /angular/angular
//= require /fypapplication/core/fypapplication.core
//= require /fypapplication/index/fypapplication.index
//= require /fypapplication/industry/fypapplication.industry

angular.module("fypapplication", [
    "ngRoute",
    "fypapplication.core",
    "fypapplication.industry"
]);
