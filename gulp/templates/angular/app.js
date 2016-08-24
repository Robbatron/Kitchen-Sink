/*
 *
 * @description
 * # DiSCO Tools Team
 *
 */

angular.module('appName', ['ui.router'])
    .run(angularBoot)
    .config(routes);

function angularBoot() {
    console.log('Angular Booting up!!!!');
}

function routes($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $urlRouterProvider.otherwise("/");

    $stateProvider
        /*add-state*/;
}
