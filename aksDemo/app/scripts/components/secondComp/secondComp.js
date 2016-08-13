function SecondCompCtrl() {
    this.$onInit = function(){
        console.log('Component second comp initialized!');
    };
}
angular.module('aks').component('secondComp', {
    bindings: {
        name : '@'
    },
    controller : SecondCompCtrl,
    templateUrl: "secondComp/secondComp.html"
});
