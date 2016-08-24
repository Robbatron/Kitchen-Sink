
    
    angular.module('aks', ['ui.router'])
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
            .state('index', {
                url : "/",
                template: '<main-comp aks="$resolve.aks"></main-comp>',
                resolve: {
                    aks : function(peService){

                        return peService.years.then(function(result){

                            console.log(result.data);

                            return result.data;

                        });

                    }
                }
            })
        ;
    }
