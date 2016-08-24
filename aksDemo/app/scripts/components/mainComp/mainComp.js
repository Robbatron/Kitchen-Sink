/**
 * Created by RZ3T64 on 6/11/2016.
 */

    function MainCompCtrl() {

        this.$onInit = function(){

            console.log('Component main view initialized!');
        };


    }
    angular.module('aks').component('mainComp', {
        bindings: {
            aks : '<'
        },
        controller : MainCompCtrl,
        templateUrl: "mainComp/mainComp.html"
    });

