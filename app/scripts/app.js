/*
 *
 * @description
 * # DiSCO Tools Team
 *
 */

angular.module('testProject', ['ui.router'])
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
        .state("maincomp", {
            url : "/",
            template : "< main-comp ></ main-comp >",
            resolve : { 
               mainComp : function ( mainService ) {
                    mainService.getResult.then(function(result) {
                        return console.log(result.data);
                    }, function(error){
                        return console.log(error); 
                    });
                    // mainService.postResult.then(function(result) {
                    //     return console.log(result.data);
                    // }, function(error){
                    //    return console.log(error); 
                    // });
               }
            }
        })/*add-state*/;
}
