//= wrapped
//= require /angular/angular
//= require /angular/angular-route
//= require /angular/angular-touch
//= require /angular/angular-animate
//= require /angular/ui-bootstrap-tpls
//= require /fypapplication/core/fypapplication.core
//= require /fypapplication/index/fypapplication.index
//= require /fypapplication/industry/fypapplication.industry

angular.module("fypapplication", [
    "ngRoute",
    "ui.bootstrap",
    "fypapplication.core",
    "fypapplication.industry",
    "ui.bootstrap",
    "ngAnimate",
    "ngTouch"
]);
