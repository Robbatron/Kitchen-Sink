/**
 * Created by RZ3T64 on 6/10/2016.
 */

    function peService( apiService, coreValues ) {

    var apiClaude = coreValues.pe;
    
        var years = apiService.fetch('GET', apiClaude)
            .then(function(result){

                return result;

            });


        return {
            years : years
        };
    }

    angular.module('aks').factory('peService', peService);