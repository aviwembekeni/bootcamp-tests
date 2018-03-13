//import greet from "../greet.js";
import require from 'require';
var greet = require('../greet.js');
var assert = require('assert');

describe('the greet function' , function(){
    it('should greet Janine correctly' , function(){
        assert.equal('Hello, Janine', greet('Janine'));

    });
});
