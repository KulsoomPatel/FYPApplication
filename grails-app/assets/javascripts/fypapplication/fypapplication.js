//= wrapped
//= require /angular/angular
//= require /angular/angular-route
//= require /angular/angular-touch
//= require /angular/angular-animate
//= require /angular/ui-bootstrap-tpls
//= require /fypapplication/core/fypapplication.core
//= require /fypapplication/index/fypapplication.index
//= require /fypapplication/industry/fypapplication.industry
//= require /fypapplication/data/fypapplication.data


angular.module("fypapplication", [
    "ngRoute",
    "ui.bootstrap",
    "fypapplication.core",
    "fypapplication.industry",
    "fypapplication.data",
    "ui.bootstrap",
    "ngAnimate",
    "ngTouch"
]);
