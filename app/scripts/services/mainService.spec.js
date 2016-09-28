
describe('Service : mainService', function(){

    var mainService;

    beforeEach(module('testProject'));

    describe('Factory Service', function () {

        beforeEach(inject(function($injector){

            mainService = $injector.get('mainService');

        }));

        it('what should it do', function() {

            expect(mainService).toBeDefined();

        });
    });
});