import {eulerFormula} from './euler'

/**
 * Use Euler's formula to compare Gauss Sum to n.
 * @param n The number to execute Gauss sum on.
 * @returns {string|{calculationSteps: string}}
 */
export const gaussSum = (n) => {
    if (n < 1) {
        return 'n must be greater or equal to 1.'
    }

    if (n === 1) {
        return {
            calculationSteps: '1 = \u03C6(1)'
        }
    }

    try {
        let sqrtN = Math.floor(Math.sqrt(n));
        let calculationSteps = '\u03C6(1)';
        let calculationHelper = '1';
        let numsStack = [n];
        let explanation = '\u03C6(1) = 1';

        for (let i = 2; i <= sqrtN; i++) {
            if ((n % i) === 0) {
                numsStack.push(Math.floor(n/i));
                let eulerRes = eulerFormula(i);
                calculationSteps += ' + \u03C6(' + i + ')';
                calculationHelper += ' + ' + eulerRes.value;
                explanation += '\n' + eulerRes.calculationSteps.replace('\n', ' = ' + eulerRes.value + ',    ');
            }
        }

        while (numsStack.length > 0) {
            let currNum = numsStack.pop();
            let eulerRes = eulerFormula(currNum);
            calculationSteps += ' + \u03C6(' + currNum + ')';
            calculationHelper += ' + ' + eulerRes.value;
            explanation += '\n' + eulerRes.calculationSteps.replace('\n', ' = ' + eulerRes.value + ',    ');
        }

        return {
            calculationSteps: n + ' = ' + calculationSteps + ' = ' + calculationHelper + '\n\n' + explanation
        };
    } catch (e) {
        return 'Error has occurred while executing gaussSum(' + n + ') algorithm: ' + e;
    }
};