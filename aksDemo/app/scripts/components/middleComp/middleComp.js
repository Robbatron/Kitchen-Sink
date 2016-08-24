function MiddleCompCtrl() {

    this.$onInit = function(){

        console.log('Component middle comp initialized!');

    };

}

angular.module('aks').component('middleComp', {
    bindings: {
        aks : '<'
    },
    controller : MiddleCompCtrl,
    templateUrl: "middleComp/middleComp.html"
});
