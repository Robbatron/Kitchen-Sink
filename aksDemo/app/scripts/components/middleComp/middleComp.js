function MiddleCompCtrl() {
    this.$onInit = function(){
        console.log('Component middle comp initialized!');
    };
}

angular.module('aks').component('middleComp', {
    bindings: {
        name : '@'
    },
    controller : MiddleCompCtrl,
    templateUrl: "middleComp/middleComp.html"
});
