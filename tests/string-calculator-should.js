"use strict";

var assert = require('chai').assert;
var Calculator = require('../src/string-calculator');

suite('String calculator should', function () {
    test('return default value if input is empty', function () {
        let calculator = createCalculator();

        let sum = calculator.add(null);

        assert.equal(sum, 0);
    });

    test('return 1 if input is 1', function () {
        var calculator = createCalculator();

        let sum = calculator.add('1');

        assert.equal(sum, 1);
    });

    let createCalculator = function () {
        return new Calculator();
    };

});