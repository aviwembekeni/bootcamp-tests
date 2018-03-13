describe('the transportFee function' , function(){
    it('should returns the right price based on the shift you are working.' , function(){
        assert.equal('R20', transportFee('morning'));
        assert.equal('R10', transportFee('afternoon'));
        assert.equal('free', transportFee('nightshift'));
    });
});
