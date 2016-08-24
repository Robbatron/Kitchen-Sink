
describe('Component : compName', function(){

    var controller;

    beforeEach(module('appName'));
    beforeEach(module('ui.router'));

    describe('Controller data', function () {

        beforeEach(inject(function($rootScope, $componentController){

            //scope = $rootScope.$new();
            controller = $componentController('compName');

        }));

        it('should have my binding bound', function() {

            expect(controller).toBeDefined();

        });
    });
});