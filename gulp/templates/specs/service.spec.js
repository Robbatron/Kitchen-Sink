
describe('Service : serviceName', function(){

    let serviceName;

    beforeEach(module('appName'));

    describe('Factory Service', function () {

        beforeEach(inject(function($injector){

            serviceName = $injector.get('serviceName');

        }));

        it('what should it do', function() {

            expect(serviceName).toBeDefined();

        });
    });
});