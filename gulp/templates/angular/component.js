/**
 * Created by RZ3T64 on 6/20/2016.
 */

function ctrlName() {

    this.$onInit = function(){

        console.log('Component : compName initialized!');

    };
}

angular.module('appName').component('compName', {
    // Only keep the bindings you will use.
    bindings: {
        someVar1 : '@', // means no binding and only strings can be passed
        someVar2 : '<', // means a one way binding
        someVar3 : '=', // means two way binding
        someVar4 : '&'  // means a callback to events
    },
    controller : ctrlName,
    templateUrl: 'templateName'
});
