"use strict";

function apiService($http) {
    function fetch(type, apiURI, param) {
        return $http ({
            method: type,
            url: apiURI,
            data: param
        }).then (function (response) {
            return response;
        });
    }
    return {
        fetch: fetch
    };
}

angular.module('appName').factory('apiService', apiService);