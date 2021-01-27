import {gcd} from './gcd'
import {primeFactors} from './prime-factors'

/**
 * Get all numbers between 1 and n where gcd(n, i) = 1.<br/>
 * The response will be a string in case of error, or object containing array with the numbers.
 * e.g. for n=3 the result will be {nums: [1, 2]}.
 * @param n The number to calculate Euler function for.
 * @returns {string|{nums: [], calculationSteps: string}}
 */
export const eulerFunc = (n) => {
    if (n < 1) {
        return 'n must be greater or equal to 1.'
    }

    if (n === 1) {
        return {
            nums: [1],
            calculationSteps: 'gcd(1, 1) = 1'
        }
    }

    try {
        let nums = [];
        let calculationSteps = '';

        for (let i = 1; i < n; i++) {
            let gcdRes = gcd(n, i);
            if (gcdRes.value === 1) {
                calculationSteps += gcdRes.calculationSteps + '\n';
                nums.push(i);
            }
        }

        return {
            nums: nums,
            calculationSteps: calculationSteps
        };
    } catch (e) {
        return 'Error has occurred while executing eulerFunc(' + n + ') algorithm: ' + e;
    }
};


/**
 * Get the amount of numbers between 1 and n where gcd(n, i) = 1, using Euler's formula<br/>
 * The response will be a string in case of error, or object containing the value and calculation steps for exam.
 * @param n The number to calculate Euler function for.
 * @returns {string|{value: number, calculationSteps: string}}
 */
export const eulerFormula = (n) => {
    if (n < 1) {
        return 'n must be greater or equal to 1.'
    }

    if (n === 1) {
        return {
            value: 1,
            calculationSteps: ''
        }
    }

    try {
        let primeFactorRes = primeFactors(n);
        let calculationSteps = '\u03C6(' + n + ') = ' + n;
        let calculationHelper = '';
        let value = n;

        for (let i = 0; i < primeFactorRes.buckets.length; i++) {
            let currPrime = primeFactorRes.buckets[i].prime;
            calculationSteps += ' * (1 - 1/' + currPrime + ')'
            value *= (1 - (1/currPrime));

            if (calculationHelper.length !== 0) {
                calculationHelper += ' * '
            }
            calculationHelper += currPrime + '^' + primeFactorRes.buckets[i].count;
        }

        return {
            value: Math.floor(value),
            calculationSteps: calculationSteps + ' = ' + Math.floor(value) + '\n' + n + ' = ' + calculationHelper
        };
    } catch (e) {
        return 'Error has occurred while executing eulerFormula(' + n + ') algorithm: ' + e;
    }
};