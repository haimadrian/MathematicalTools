/**
 * Calculate gcd using Euclidean algorithm.<br/>
 * Response will be a string in case of error, or object containing gcd, iterations count, calculation steps and explanation for exam.
 * @param a gcd(a, b)
 * @param b gcd(a, b)
 * @returns {string|{value: number, actionsCount: number, calculationSteps: string, explanation: string}}
 */
export const gcd = (a, b) => {
    if (a === 0 || b === 0) {
        return 'You must enter both a and b in order to calculate gcd(a,b)';
    }

    try {
        let actionsCount = 0;
        let calculationSteps = 'gcd(' + a + ', ' + b + ') = ';
        let explanation = '';

        // If any of the numbers is negative, make sure they are positive without counting it as a step.
        if (a < 0 || b < 0) {
            a = Math.abs(a);
            b = Math.abs(b);
            calculationSteps += 'gcd(' + a + ', ' + b + ') = ';
        }

        // Make sure a is the greater one among a and b, without counting it as a step.
        if (b > a) {
            console.log('Swapping a and b');
            let c = a;
            a = b;
            b = c;
            calculationSteps += 'gcd(' + a + ', ' + b + ') = ';
        }

        let remainder = 0;

        do {
            remainder = a % b;
            actionsCount++;
            console.log(a);
            explanation += a + ' = ' + Math.floor(a/b) + '*' + b + ' + ' + remainder + '\n';

            a = b;
            b = remainder;
            calculationSteps += 'gcd(' + a + ', ' + b + ') = ';

            // Continue as long as there is a remainder. (a % b)
        } while (remainder !== 0);

        calculationSteps += a;

        return {
            value: a,
            actionsCount: actionsCount,
            calculationSteps: calculationSteps,
            explanation: explanation + '\nIt took ' + actionsCount + ' iterations to calculate gcd.'
        };
    } catch (e) {
        return 'Error has occurred while executing gcd(' + a + ', ' + b + ') algorithm: ' + e;
    }
};