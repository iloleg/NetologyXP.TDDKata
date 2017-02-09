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

    test('return single number if input is that number', function () {
        var calculator = createCalculator();

        let sum = calculator.add('2');

        assert.equal(sum, 2);
    });

    test('return sum of two one-digit numbers', function () {
        let calculator = createCalculator();

        let sum = calculator.add('1,2');

        assert.equal(sum, 1 + 2);
    });

    test('return sum of any two numbers', function () {
        let calculator = createCalculator();

        let sum = calculator.add('11,22');

        assert.equal(sum, 11 + 22);
    });

    let createCalculator = function () {
        return new Calculator();
    };

});