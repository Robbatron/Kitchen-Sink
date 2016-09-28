"use strict";

angular.module('appName', ['ui.router'])
    .run(angularBoot)
    .config(routes);

const angularBoot = () => console.log('Angular Booting up!!!!');

const routes = ($stateProvider, $urlRouterProvider, $locationProvider) => {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $urlRouterProvider.otherwise("/");

    $stateProvider
        /*add-state*/;
};
