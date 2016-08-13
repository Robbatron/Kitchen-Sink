/**
 * Created by RZ3T64 on 6/10/2016.
 */

    function imageViewerService( apiService, coreValues ) {

    var apiURL = coreValues.imageURI;
    
        var result = apiService.fetch('GET', apiURL)
            .then(function(result){

                return result;
                
            });

        return {
            result : result
        };
    }

    angular.module('aks').factory('imageViewerService', imageViewerService);