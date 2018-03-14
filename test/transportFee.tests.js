describe('the transportFee function' , function(){
    it("should return 'R20' if the shift is 'morning'." , function(){
        assert.equal('R20', transportFee('morning'));

    });

    it("should return 'R10' if the shift is 'afternoon'." , function(){
        assert.equal('R10', transportFee('afternoon'));
    });

    it("should return 'free' if the shift is 'nightshift'." , function(){

        assert.equal('free', transportFee('nightshift'));
    });
});
