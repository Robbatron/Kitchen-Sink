
describe('Component : testProject', function(){

    var controller;

    beforeEach(module('testProject'));
    beforeEach(module('ui.router'));

    describe('Controller data', function () {

        beforeEach(inject(function($rootScope, $componentController){

            //scope = $rootScope.$new();
            controller = $componentController('testProject');

        }));

        it('should have my binding bound', function() {

            expect(controller).toBeDefined();

        });
    });
});