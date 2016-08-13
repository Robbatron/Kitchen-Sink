/**
 * Created by RZ3T64 on 6/11/2016.
 */

    function MainViewCtrl() {
        this.$onInit = function(){
            console.log('Component main view initialized!');
        };
    }
    angular.module('aks').component('mainView', {
        bindings: {
            name : '@'
        },
        controller : MainViewCtrl,
        templateUrl: "mainView/mainView.html"
    });

