/**
 * Created by RZ3T64 on 6/20/2016.
 */

function MainCompCtrl() {

    this.$onInit = function(){

        console.log('Component : mainComp initialized!');

    };
}

angular.module('testProject').component('mainComp', {
    // Only keep the bindings you will use.
    bindings: {
        someVar1 : '@', // means no binding and only strings can be passed
        someVar2 : '<', // means a one way binding
        someVar3 : '=', // means two way binding
        someVar4 : '&'  // means a callback to events
    },
    controller : MainCompCtrl,
    templateUrl: 'mainComp/mainComp.html'
});