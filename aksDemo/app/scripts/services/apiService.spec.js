

describe('Service : apiService', function(){
    
    var apiService;
    
    beforeEach(module('aks'));

describe('Factory Service', function () {
    beforeEach(inject(function($injector){
        apiService = $injector.get('apiService');

    }));

    it('what should it do', function() {
        expect(apiService.fetch).toBeDefined();
    });
});
});