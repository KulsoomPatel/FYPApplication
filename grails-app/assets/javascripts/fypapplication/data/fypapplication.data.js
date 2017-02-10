/**
 * Created by Kulsoom on 09/02/2017.
 */

//= wrapped
//= require /angular/angular
//= require /angular/angular-route
//= require /angular/fypapplication/fypapplication.core
//= require /angular/fypapplication/fypapplication.industry
//= require_self
//= require routes
//= require_tree services
//= require_tree controllers
//= require_tree domain
//= require_tree templates

angular.module("fypapplication.data", ["ngRoute", "fypapplication.core", "fypapplication.industry"]);