function serviceName( apiService, coreValues ) {
    var apiURL = coreValues.pe;

    var getResult = apiService.fetch('GET', apiURL)
        .then(function(result){
            return result;
        });

    /*var postResult = apiService.fetch('POST', apiURL)
        .then(function(result){
            return result;
        });*/

    return {
        getResult : getResult
        //postResult : postResult
    };
}

angular.module('appName').factory('serviceName', serviceName);

