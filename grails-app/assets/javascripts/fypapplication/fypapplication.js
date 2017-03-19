//= wrapped
//= require /angular/angular
//= require /angular/angular-route
//= require /angular/angular-touch
//= require /angular/angular-animate
//= require /angular/ui-bootstrap-tpls
//= require /angular/loading-bar
//= require /javascript/ng-google-chart
//= require /fypapplication/core/fypapplication.core
//= require /fypapplication/index/fypapplication.index
//= require /fypapplication/industry/fypapplication.industry
//= require /fypapplication/sectorData/fypapplication.sectordata
//= require /fypapplication/industryData/fypapplication.industrydata

angular.module("fypapplication", [
    "ngRoute",
    "ui.bootstrap",
    "fypapplication.core",
    "fypapplication.industry",
    "fypapplication.sectordata",
    "fypapplication.industrydata",
    "ui.bootstrap",
    "ngAnimate",
    "ngTouch",
    "angular-loading-bar",
    "googlechart"

]);
