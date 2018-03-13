describe('the countAllPaarl function' , function(){
    it('should count registration numbers from Paarl.' , function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });
});
