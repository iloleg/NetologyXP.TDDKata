"use strict";

class Calculator {
    add(numbers) {
        if (!numbers) {
            return 0;
        }

        return parseInt(numbers, 10);
    }
}

module.exports = Calculator;