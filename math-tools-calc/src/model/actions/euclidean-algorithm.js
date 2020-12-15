function padNumber(num, width) {
    width = width || 3;
    let n = '' + num;
    return (n.length >= width ? n : new Array(width - n.length + 1).join(' ') + n);
}

function vectorToString(arr, width) {
    let result = '(' + padNumber(arr[0], width);
    for (let i = 1; i < arr.length; i++) {
        result += ',' + padNumber(arr[i], width);
    }
    return result + ')';
}

/**
 * Calculate gcd, u, and v, (from Bezout) using extended Euclidean algorithm.<br/>
 * Response will be a string in case of error, or object containing gcd, u, v and calculation steps for exam.
 * @param a gcd(a, b)
 * @param b gcd(a, b)
 * @param aName How to print a variable in calculation steps.
 * @param bName How to print b variable in calculation steps.
 * @param uName How to print u variable in calculation steps.
 * @param vName How to print v variable in calculation steps.
 * @returns {string|{value: number, u: number, v: number, calculationSteps: string}}
 */
export const euclideanAlgorithm = (a, b, aName='a', bName='b', uName='u', vName='v') => {
    if (a === 0 || b === 0) {
        return 'You must enter both ' + aName + ' and ' + bName + ' in order to calculate gcd(' + aName + ',' + bName + ')';
    }

    let aBackup = a;
    let bBackup = b;

    let isANeg = (a < 0);
    let isBNeg = (b < 0);
    let isSwap = false;
    a = Math.abs(a);
    b = Math.abs(b);

    if (b > a) {
        isSwap = true;
        let c = a;
        a = b;
        b = c;
    }

    try {
        let prev = [a, 1, 0];
        let calculationSteps = 'Using extended (vectors) Euclid\'s algorithm in order to find gcd(' + aName + ',' + bName +
            ') = ' + aName + uName + ' + ' + bName + vName + ' as per Bezout.\n' + vectorToString(prev);
        let curr = [b, 0, 1];
        let tempCurr = [...curr];
        let remainder = a % b;
        let q = 0;

        // As long as there is a remainder. (a % b)
        while (remainder !== 0) {
            // Get a/b, floored.
            q = Math.floor(a / b);
            calculationSteps += '\n' + vectorToString(curr) + '\t\t\u230A' + padNumber(a) + ' / ' + padNumber(b) + '\u230B = ' + padNumber(q, 2) + ' \t';

            // Calculate the next row
            // (a1, a2, a3) - q*(b1, b2, b3) -> (c1, c2, c3)
            for (let i = 0; i < 3; i++) {
                tempCurr[i] = prev[i] - (q * curr[i]);
            }

            calculationSteps += vectorToString(prev) + ' - ' + padNumber(q, 2) + '*' + vectorToString(curr) + ' = ' + vectorToString(tempCurr);
            a = curr[0]; // Update a, so it will use the current row's value. For next iteration
            b = tempCurr[0]; // Update b, so it will use the next row's value. For next iteration
            prev = curr;
            curr = [...tempCurr]; // Copy

            // Continue to the next step
            remainder = a % b;
        }

        // Last step, we will use its values (from curr)
        q = Math.floor(a / b);
        let u = curr[1];
        let v = curr[2];
        if (isSwap) {
            u = v;
            v = curr[1];
        }

        if (isANeg) {
            u *= (-1);
        }

        if (isBNeg) {
            v *= (-1);
        }
        calculationSteps += '\n' + vectorToString(curr) + '\t\t\u230A' + padNumber(a) + ' / ' + padNumber(b) + '\u230B = ' + padNumber(q, 2) + ' \t';
        calculationSteps += '\n\ngcd(' + aBackup + ', ' + bBackup + ') = ' + curr[0] + ' = ' +
            aBackup + '*' + u + ' + ' + bBackup + '*' + v + '    \u21D2    ' + uName + ' = ' + u + ',  ' + vName + ' = ' + v;

        return {
            value: curr[0],
            u: u,
            v: v,
            calculationSteps: calculationSteps
        };
    } catch (e) {
        return 'Error has occurred while executing Euclid\'s Algorithm: ' + e;
    }
};