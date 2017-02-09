"use strict";

var assert = require('chai').assert;
var Calculator = require('../src/string-calculator');

suite('String calculator should', function () {
    test('return default value if input is empty', function () {
        var calculator = new Calculator();

        let sum = calculator.add(null);

        assert.equal(sum, 0);
    });
});