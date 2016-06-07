'use strict';
/**
 * Calculator class is designed to execute various operations with passed arguments
 * @class
 */
class Calculator {

    constructor(/*arguments*/) {
        let _this = this;

        let operators = {
            '+': _this.add,
            '-': _this.subtract,
            '/': _this.divide,
            '**': _this.pow,
            '%': _this.modulo,
            '*' : _this.multiply
        };

        /**
         * defines the type of operator
         * puts the result in the console
         * @param {Array<String, Number>} args first item is a type of operator, the rest items arr numbers for calculation
         */
        return function(...args) {
            let operator = args[0];
            let func;

            args.splice(0, 1);

            if (!operators[operator]) {
                func = args[0];
                operators[operator] = func;
            } else {
                func = operators[operator];
            }

            console.log( args.reduce(func) );
        }
    }

    /**
     * calculates the sum of items
     * @param {number} a argument for addition operation
     * @param {number} b argument for addition operation
     * @return {number} The sum of items
     */
    add(a, b) {
        return a + b;
    }

    /**
     * calculates the difference of items
     * @param {number} a argument for subtraction operation
     * @param {number} b argument for subtraction operation
     * @return {number} The difference for items
     */
    subtract(a, b) {
        return a - b;
    }

    /**
     * calculates the product of items
     * @param {number} a argument for multiplication operation
     * @param {number} b argument for multiplication operation
     * @return {number} The product of items
     */
    multiply(a, b) {
        return  a * b;
    }

    /**
     * calculates the quotient of items
     * @param {number} a argument for division operation
     * @param {number} b argument for division operation
     * @return {number} The quotient of items
     */
    divide(a, b) {
        return a / b;
    }

    /**
     * calculates the power of items
     * @param {number} a argument for power operation
     * @param {number} b argument for power operation
     * @return {number} The power of items
     */
    pow(a, b) {
        return Math.pow(a, b);
    }

    /**
     * calculates the modulo of items
     * @param {number} a argument for modulation operation
     * @param {number} b argument for modulation operation
     * @return {number} The modulo of items
     */
    modulo(a, b) {
        return a % b;
    }
}

let calc = new Calculator();
