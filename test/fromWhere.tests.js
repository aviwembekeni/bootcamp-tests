describe('the fromWhere function' , function(){
    it("should return the town the car is from. 'Bellville'" , function(){
        assert.equal('Bellville', fromWhere('CY'));

    });

    it("should return the town the car is from. 'Paarl'" , function(){
        assert.equal('Paarl', fromWhere('CJ'));

    });

    it("should return the town the car is from. 'Cape Town'" , function(){
        assert.equal('Cape Town', fromWhere('CA'));

    });

    it("should return the town the car is from. 'Some other place!'" , function(){

        assert.equal('Some other place!', fromWhere('CC'));
    });
});
