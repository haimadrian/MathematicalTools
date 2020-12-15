import {gcd} from './gcd'
import {primeFactors} from './prime-factors'

export const GCD_ALG_TYPE = 'gcd';
export const PRIME_FACTORS_ALG_TYPE = 'primeFactor';

/**
 * Calculate lcm using gcd (Euclidean algorithm) or prime factors, depends on algType parameter.<br/>
 * Response will be a string in case of error, or object containing lcm, calculation steps and explanation for exam.
 * @param a lcm(a, b)
 * @param b lcm(a, b)
 * @param algType whether we want the gcd (GCD_ALG_TYPE) technique, or prime factors (PRIME_FACTORS_ALG_TYPE) technique.
 * @returns {string|{value: number, calculationSteps: string, explanation: string}}
 */
export const lcm = (a, b, algType=GCD_ALG_TYPE) => {
    if (a === 0 || b === 0) {
        return 'You must enter both a and b in order to calculate lcm(a,b)';
    }

    try {
        algType = algType || GCD_ALG_TYPE;
        if (algType === GCD_ALG_TYPE) {
            let gcdResult = gcd(a, b);
            let lcmValue = Math.abs(a * b) / gcdResult.value;

            return {
                value: lcmValue,
                calculationSteps: '|' + a + '*' + b + '| / ' + gcdResult.value + ' = |' + (a * b) + '| / ' + gcdResult.value + ' = ' + lcmValue,
                explanation: gcdResult.calculationSteps + '\n' + gcdResult.explanation
            };
        } else {
            let aPrimeFactors = primeFactors(a);
            let bPrimeFactors = primeFactors(b);
            console.log(aPrimeFactors)
            console.log(bPrimeFactors)
            let arr = new Array(Math.max(aPrimeFactors.buckets[aPrimeFactors.buckets.length - 1].prime,
                                         bPrimeFactors.buckets[bPrimeFactors.buckets.length - 1].prime) + 1);
            let explanation = a + ' = ' + (a < 0 ? '-1 * ' : '');
            let innerExplanation = '';
            for (let i = 0; i < arr.length; i++) {
                arr[i] = 0;
            }
            for (let i = 0; i < aPrimeFactors.buckets.length; i++) {
                arr[aPrimeFactors.buckets[i].prime] = aPrimeFactors.buckets[i].count;

                if (innerExplanation.length !== 0) {
                    innerExplanation += ' * ';
                }
                innerExplanation += aPrimeFactors.buckets[i].prime + '^' + aPrimeFactors.buckets[i].count;
            }

            explanation += innerExplanation + '\n' + b + ' = ' + (b < 0 ? '-1 * ' : '');
            innerExplanation = '';
            for (let i = 0; i < bPrimeFactors.buckets.length; i++) {
                arr[bPrimeFactors.buckets[i].prime] = Math.max(arr[bPrimeFactors.buckets[i].prime], bPrimeFactors.buckets[i].count);

                if (innerExplanation.length !== 0) {
                    innerExplanation += ' * ';
                }
                innerExplanation += bPrimeFactors.buckets[i].prime + '^' + bPrimeFactors.buckets[i].count;
            }

            explanation += innerExplanation;
            innerExplanation = '';
            let lcmValue = 1;
            for (let i = 2; i < arr.length; i++) {
                if (arr[i] !== 0) {
                    lcmValue *= Math.pow(i, arr[i]);

                    if (innerExplanation.length !== 0) {
                        innerExplanation += ' * ';
                    }
                    innerExplanation += i + '^' + arr[i];
                }
            }

            return {
                value: lcmValue,
                calculationSteps: 'lcm(' + a + ', ' + b + ') = ' + innerExplanation + ' = ' + lcmValue,
                explanation: explanation
            };
        }
    } catch (e) {
        return 'Error has occurred while executing lcm(' + a + ', ' + b + ') algorithm: ' + e;
    }
};