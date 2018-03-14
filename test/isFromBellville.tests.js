describe('the isFromBellville function' , function(){
    it('should return true if regNumber starts with CY' , function(){
        assert.equal(true,isFromBellville('CY'));
    });

    it('should return false if regNumber does not starts with CY' , function(){
        assert.equal(false,isFromBellville('CA'));
    });
});
