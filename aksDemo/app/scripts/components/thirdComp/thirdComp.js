function ThirdCompCtrl() {

    this.$onInit = function(){
        
        console.log('Component third comp initialized!');
    };
}
angular.module('aks').component('thirdComp', {
    bindings: {
        name : '@'
    },
    controller : ThirdCompCtrl,
    templateUrl: "thirdComp/thirdComp.html"
});
