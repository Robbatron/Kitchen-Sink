/**
 * Created by RZ3T64 on 6/9/2016.
 */
    
    function apiService( $http ) {
    
        function fetch(type, apiURI, param) {
            
            return $http ( {
                method: type,
                url: apiURI,
                data: param
            } ).then ( function ( response ) {

                return response;
                
            } );
        }
    
        return {
            fetch : fetch
        };
    }

    angular.module('aks').factory('apiService', apiService);
