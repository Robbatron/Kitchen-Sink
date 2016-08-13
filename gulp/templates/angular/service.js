function serviceName( apiService, coreValues ) {
    var apiURL = coreValues.imageURI;

    var result = apiService.fetch('GET', apiURL)
        .then(function(result){
            return result;
        });

    return {
        result : result
    };
}

angular.module('appName').factory('serviceName', serviceName);

