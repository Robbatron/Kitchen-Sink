/**
 * Created by RZ3T64 on 6/20/2016.
 */

function ctrlName() {
    this.$onInit = function(){
        console.log('Component main viewer initialized!');
    };
    this.name = 'Main Component!';
}
angular.module('appName').component('compName', {
    bindings: {
        name : '@'
    },
    controller : ctrlName,
    templateUrl: 'templateName'
});