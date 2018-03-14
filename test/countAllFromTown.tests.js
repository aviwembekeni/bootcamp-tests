describe('the countAllFromTown function' , function(){
    it('should return number registration numbers in the string that is for that town.' , function(){
        assert.deepEqual(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });

    it('should return number registration numbers in the string that is for that town.' , function(){
        assert.deepEqual(1, countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'));
    });
});
