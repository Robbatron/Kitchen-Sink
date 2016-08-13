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

function routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('index', {
            url : ""
        })/*add-state*/;
}
