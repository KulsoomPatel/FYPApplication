/**
 * Created by Kulsoom on 14/02/2017.
 */
//= wrapped
//= require /angular/angular
//= require /angular/angular-route
//= require /angular/angular-touch
//= require /angular/angular-animate
//= require /angular/ui-bootstrap-tpls
//= require /angular/fypapplication/fypapplication.core
//= require_self
//= require routes
//= require_tree services
//= require_tree controllers
//= require_tree domain
//= require_tree templates

angular.module("fypapplication.industrydata", ["ngRoute", "fypapplication.core"]);