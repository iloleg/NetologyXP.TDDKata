"use strict";

class Calculator {
    constructor() {
        this._defaultValue = 0;
    }

    add(numbers) {
        if (this._isEmpty(numbers)) {
            return this._defaultValue;
        }

        if (numbers.indexOf(',') === -1) {
            return this._parseSingleNumber(numbers);
        }

        return parseInt(numbers[0]) + parseInt(numbers[2]);

    }

    _parseSingleNumber(numbers) {
        return parseInt(numbers, 10);
    }

    _isEmpty(numbers) {
        return !numbers;
    }
}

module.exports = Calculator;