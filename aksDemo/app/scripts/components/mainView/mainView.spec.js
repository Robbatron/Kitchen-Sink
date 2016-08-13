/**
 * Created by RZ3T64 on 7/22/2016.
 */
describe('Component : mainView', function(){
    
    var controller;
    
    beforeEach(module('aks'));
    beforeEach(module('ui.router'));
    
    describe('Controller data', function () {
        beforeEach(inject(function($rootScope, $componentController){
            //scope = $rootScope.$new();
            controller = $componentController('mainView');
        }));

        it('should have my binding bound', function() {
            expect(controller).toBeDefined();
        });
    });
});