//import greet from "../greet.js";
var greet = require('../greet.js');
var assert = require('assert');

describe('the greet function' , function(){
    it('should greet Janine correctly' , function(){
        assert.equal('Hello, Janine', greet('Janine'));

    });
});
