import {euclideanAlgorithm} from './euclidean-algorithm'

/**
 * Parse an equation string an extract a, b and n out of it.
 * @param equation The equation to parse
 * @returns {string|{a: number, b: number, n: number}}
 */
function parseEquation(equation) {
    // Look at it as a lower case string, with no spaces, to be able to skip const parts with no exceptions.
    let srcEquation = equation;
    equation = equation.toLowerCase().replaceAll(' ', '');

    // In order to support copying the equation from word/pdf, replace potential characters of word with input ones.
    equation = equation.replaceAll('𝑥', 'x').replaceAll('𝑋', 'x').replaceAll('𝑚', 'm').replaceAll('𝑜', 'o').replaceAll('𝑑', 'd')

    if (equation.length === 0) {
        return 'Nothing to solve. Equation was empty.'
    }

    let indexOfX = equation.indexOf('x');
    if (indexOfX < 0) {
        return 'Illegal equation. 𝑥 could not be detected. Was: ' + srcEquation;
    }

    let a = indexOfX === 0 ? 1 : Number(equation.substr(0, indexOfX));
    let indexOfEqual = equation.indexOf('\u2261');
    if (indexOfEqual < 0) {
        indexOfEqual = equation.indexOf('=');
        if (indexOfEqual < 0) {
            return 'Illegal equation. Equals symbol could not be detected. Was: ' + srcEquation;
        }
    }

    let indexOfBeginParentheses = equation.indexOf('(');
    if (indexOfBeginParentheses < 0) {
        return 'Illegal equation. ( could not be detected. Was: ' + srcEquation;
    }

    let length = indexOfBeginParentheses - indexOfEqual - 1;
    if (length < 1) {
        return 'Illegal equation. b (remainder) was empty. Was: ' + srcEquation;
    }

    let b = Number(equation.substr(indexOfEqual + 1, length));
    let indexOfMod = equation.indexOf('d');
    if (indexOfMod < 0) {
        indexOfMod = equation.indexOf('(');
    }

    let c = equation.charAt(indexOfMod + 1);
    if (c < '0' || c > '9') {
        return 'Illegal equation. 𝑚𝑜𝑑 (divisor) was empty. Was: ' + srcEquation;
    }

    let indexOfEndParentheses = equation.indexOf(')');
    if (indexOfEndParentheses < 0) {
        return 'Illegal equation. ) could not be detected. Was: ' + srcEquation;
    }

    let n = Number(equation.substr(indexOfMod + 1, indexOfEndParentheses - indexOfMod - 1));

    return {
        a: a,
        b: b,
        n: n
    }
}

/**
 * Solves a single equation. Response will be a string in case of error, or an object containing the calculation steps,
 * with the value (x=value) that we have found. In case the equation does not have answer (gcd(a,n) does not divide b), the
 * value will be a negative number.<br/>
 * Note that there are d=gcd(a,n) values in the response, according to the formula.<br/>
 * In addition, in case of successful response, the result will contain all of the modular equation parameters: a, b, n, d, q,
 * from ax=b(mod n), where d=gcd(a, n)=aq+nt
 * @param equation The equation (string) to solve.
 * @returns {string|{calculationSteps: string, values: [{number}], a: number, b: number, n: number, d: number, q: number}}
 */
export const solveEquation = (equation) => {
    let equationItems = parseEquation(equation);

    // In case of error message, return it.
    if (typeof equationItems === 'string' || equationItems instanceof String) {
        return equationItems;
    }

    try {
        let a = equationItems.a;
        let b = equationItems.b;
        let n = equationItems.n;

        let calculationSteps = (a === 1 ? '' : a) + '𝑥\u2261' + b + '(𝑚𝑜𝑑 ' + n + ')';
        calculationSteps += ',\t\ta𝑥\u2261b(𝑚𝑜𝑑 n):  a=' + a + ',  b=' + b + ',  n=' + n + '\n';
        let gcdRes = euclideanAlgorithm(a, n, 'a', 'n', 'q', 't');
        let d = gcdRes.value;
        let q = gcdRes.u;
        calculationSteps += gcdRes.calculationSteps + '\n';

        if (b % d !== 0) {
            // GCD does not divide b. \u16C5 = NOT DIVIDES, \u21D2 = HENCE
            calculationSteps += '\ngcd(a,n)\u16C5b \u21D2 ' + d + '\u16C5' + b + ' \u21D2 No answer.';
            return {
                values: [-1],
                a: a,
                b: b,
                n: n,
                d: d,
                q: q,
                calculationSteps: calculationSteps
            }
        }

        calculationSteps += '\ngcd(a,n)|b \u21D2 ' + d + '|' + b + ' \u21D2 q=' + q;
        let x0 = (q * b / d) % n;
        calculationSteps += '\n𝑥0 \u2261 qb/d(𝑚𝑜𝑑 n) \u2261 ' + q + '*' + b + '/' + d + '(𝑚𝑜𝑑 ' + n + ') \u2261 ' +
            (q * b / d) + '(𝑚𝑜𝑑 ' + n + ')';
        if ((q * b / d) !== x0) {
            calculationSteps += ' \u2261 ' + x0 + '(𝑚𝑜𝑑 ' + n + ')';
        }
        if (x0 < 0) {
            while (x0 < 0) x0 += n;
            calculationSteps += ' \u2261 ' + x0 + '(𝑚𝑜𝑑 ' + n + ')';
        }
        calculationSteps += '\n';

        let values;

        if (d === 1) {
            values = [x0];
        } else {
            values = [];

            // Now add the values
            for (let k = 0; k < d; k++) {
                let xkBeforeMod = x0 + (k * n / d);
                let xk = xkBeforeMod % n;
                calculationSteps += '\n𝑥' + k + ' \u2261 (𝑥0 + kn/d)(𝑚𝑜𝑑 n) \u2261 (' + x0 + '+(' + k + '*' + n + '/' + d + '))(𝑚𝑜𝑑 ' + n + ') \u2261 ' +
                    xkBeforeMod + '(𝑚𝑜𝑑 ' + n + ')';

                // Now append xk after the mod, only in case it differs from what we have already appended.
                if (xkBeforeMod !== xk) {
                    calculationSteps += ' \u2261 ' + xk + '(𝑚𝑜𝑑 ' + n + ')';
                }
                if (xk < 0) {
                    while (xk < 0) xk += n;
                    calculationSteps += ' \u2261 ' + x0 + '(𝑚𝑜𝑑 ' + n + ')';
                }

                values.push(xk);
            }
        }

        return {
            values: values,
            a: a,
            b: b,
            n: n,
            d: d,
            q: q,
            calculationSteps: calculationSteps
        };
    } catch (e) {
        return 'Error has occurred while executing solveEquation(' + equation + ') algorithm: ' + e;
    }
};

export const solveEquations = (equations) => {
    let calculationSteps = '';
    let equationItems = [];

    // Parse and validate equations. Fix equations if necessary (when a != 1)
    for (let i = 0; i < equations.length; i++) {
        let currEquation = equations[i];
        let currEquationItems = parseEquation(currEquation);

        // In case of error message, return it.
        if (typeof currEquationItems === 'string' || currEquationItems instanceof String) {
            return currEquationItems;
        }

        // We must make sure a=1. If not, solve the equation to adjust it to a=1.
        if (currEquationItems.a !== 1) {
            calculationSteps += 'Equation number ' + (i+1) + ' got a\u22601. Adjusting it such that a=1. (' + currEquation + ')\n';
            let fixedEquation = solveEquation(currEquation);
            currEquationItems = {
                a: 1,
                b: fixedEquation.values[0],
                n: fixedEquation.n
            };
            calculationSteps += currEquation + '  has been solved. Fixed equation is: 𝑥\u2261' + currEquationItems.b + '(𝑚𝑜𝑑 ' + currEquationItems.n + ')\n';
            calculationSteps += 'Explanation:\n\t' + fixedEquation.calculationSteps.replaceAll('\n', '\n\t').replaceAll('\n\t\n\t', '\n\n\t') + '\n';
        }

        equationItems.push(currEquationItems);
    }

    // Calculate little m.
    let m = 1;
    let littleAExplanation = ''; // a1, a2, a3
    let littleMExplanation = ''; // m1, m2, m3
    let calculationStepsHelper = '';
    calculationSteps += 'Solving:';
    for (let i = 0; i < equationItems.length; i++) {
        let currEquationItems = equationItems[i];
        calculationSteps += '\n𝑥 \u2261 ' + currEquationItems.b + ' (𝑚𝑜𝑑 ' + currEquationItems.n + ')';

        m *= currEquationItems.n;
        if (littleMExplanation.length !== 0) {
            littleMExplanation += ' * ';
            calculationStepsHelper += ' * ';
            littleAExplanation += ' ,    ';
        }
        littleMExplanation += currEquationItems.n;
        calculationStepsHelper += 'm' + (i+1);
        littleAExplanation += 'a' + (i+1) + '=' + currEquationItems.b;
    }

    littleMExplanation = 'm = ' + calculationStepsHelper + ' = ' + littleMExplanation + ' = ' + m + '\n';

    // Calculate the big Mi values
    let bigMExplanation = '';
    let bigMs = [];
    for (let i = 0; i < equationItems.length; i++) {
        let currEquationItems = equationItems[i];
        bigMs.push(m/currEquationItems.n);

        if (bigMExplanation.length !== 0) {
            bigMExplanation += ' ,    ';
        }
        bigMExplanation += 'M' + (i+1) + '=' + m + '/' + currEquationItems.n + '=' + bigMs[bigMs.length - 1];
    }

    // Create new equations, based on MiXi = 1(mod mi)
    calculationSteps += '\n\n' + littleAExplanation + '\n' + littleMExplanation + bigMExplanation + '\n\nSolving 𝑥i now. (Mi𝑥i \u2261 1 (𝑚𝑜𝑑 mi))\n';
    let xIsEquations = [];
    for (let i = 0; i < equationItems.length; i++) {
        let currEquationItems = equationItems[i];
        let newEquation = bigMs[i] + '𝑥 \u2261 1 (𝑚𝑜𝑑 ' + currEquationItems.n + ')';
        xIsEquations.push(newEquation);
        calculationSteps += newEquation + '\n';
    }

    // Now calculate each Xi value and keep in an array.
    calculationSteps += '\n';
    let xIsValues = [];
    for (let i = 0; i < xIsEquations.length; i++) {
        let currEquation = xIsEquations[i];
        let currEquationItems = solveEquation(currEquation);
        xIsValues.push(currEquationItems.values[0]);
        calculationSteps += currEquation + ' \u21D2 𝑥' + (i+1) + '=' + currEquationItems.values[0] +
            '\nExplanation:\n\t' + currEquationItems.calculationSteps.replaceAll('\n', '\n\t').replaceAll('\n\t\n\t', '\n\n\t') + '\n';
    }

    // Now calculate x.
    calculationSteps += '\n𝑥 \u2261 ('
    calculationStepsHelper = '';
    let calculationStepsHelper2 = '';
    let x = 0;
    for (let i = 0; i < xIsValues.length; i++) {
        let num = '' + (i+1);
        let currAi = equationItems[i].b;
        let currMi = bigMs[i];
        let currXi = xIsValues[i];

        if (calculationStepsHelper.length !== 0) {
            calculationStepsHelper += ' + ';
            calculationStepsHelper2 += ' + ';
        }
        calculationStepsHelper += 'a' + num + '*M' + num + '*𝑥' + num;
        calculationStepsHelper2 += currAi + '*' + currMi + '*' + currXi;

        x += (currAi * currMi * currXi);
    }

    calculationSteps += calculationStepsHelper + ')(𝑚𝑜𝑑 m)\n𝑥 \u2261 (' + calculationStepsHelper2 + ')(𝑚𝑜𝑑 ' + m + ') \u2261 ' +
        x + '(𝑚𝑜𝑑 ' + m + ') \u2261 ';
    x = (x % m);
    calculationSteps += x + '(𝑚𝑜𝑑 ' + m + ')';

    return {
        value: x,
        m: m,
        calculationSteps: calculationSteps
    }
};