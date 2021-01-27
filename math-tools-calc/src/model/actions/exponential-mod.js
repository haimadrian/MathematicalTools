import {gcd} from './gcd'
import {eulerFormula} from './euler'

function isPrime(n) {
    if (n < 2) {
        return false;
    }

    if (n === 2 || n === 3) {
        return true;
    }

    if ((n%2) === 0) {
        return false;
    }

    let sqrtN = Math.floor(Math.sqrt(n));

    // No need to check even numbers as they are checked in the if clause above.
    for (let i = 3; i <= sqrtN; i+=2) {
        if ((n%i) === 0) {
            return false;
        }
    }

    return true;
}

/**
 * A dumb modulus calculation, where we separate it to 2's and 1's exponential. e.g. a^6=>(a^2)(a^2)(a^2) and so on
 * @param base
 * @param exponent
 * @param modulus
 * @param shouldPrintModAtTheBeginning Used by Fermat / Euler
 * @returns {{result: number, calculationSteps: string}}
 */
function splittingModulus(base, exponent, modulus, shouldPrintModAtTheBeginning=false) {
    let result = 1;
    let calculationSteps = base + "^" + exponent + (shouldPrintModAtTheBeginning ? "(𝑚𝑜𝑑 " + modulus + ")" : "" ) + " \u2261 ";

    while (exponent > 0) {
        if ((exponent % 2) === 1) {
            exponent--;
            if (exponent > 0) {
                calculationSteps += "\n \u2261 " + result + "(𝑚𝑜𝑑 " + modulus + ") * " + base + "(𝑚𝑜𝑑 " + modulus + ") * " + base + "^" + exponent + "(𝑚𝑜𝑑 " + modulus + ") \u2261 ";
            } else {
                calculationSteps += "\n \u2261 (" + result + "(𝑚𝑜𝑑 " + modulus + ") * " + base + "(𝑚𝑜𝑑 " + modulus + ") \u2261 ";
            }

            result = (result * base) % modulus;
        } else {
            exponent -= 2;
            if (exponent > 0) {
                calculationSteps += "\n \u2261 " + result + "(𝑚𝑜𝑑 " + modulus + ") * " + base + "^2(𝑚𝑜𝑑 " + modulus + ") * " + base + "^" + exponent + "(𝑚𝑜𝑑 " + modulus + ") \u2261 ";
            } else {
                calculationSteps += "\n \u2261 " + result + "(𝑚𝑜𝑑 " + modulus + ") * " + base + "^2(𝑚𝑜𝑑 " + modulus + ") \u2261 ";
            }

            result = (result * ((base * base) % modulus)) % modulus;
        }

        if (result === 0) {
            break;
        }

        if (exponent > 0) {
            calculationSteps += result + "(𝑚𝑜𝑑 " + modulus + ") * " + base + "^" + exponent + "(𝑚𝑜𝑑 " + modulus + ") \u2261 ";
        }
    }

    calculationSteps += result + "(𝑚𝑜𝑑 " + modulus + ")\n\n";
    calculationSteps += "Helper:\n";
    calculationSteps += "{ " + base + "(𝑚𝑜𝑑 " + modulus + ") \u2261 " + (base % modulus) + "(𝑚𝑜𝑑 " + modulus + ") }\n";
    calculationSteps += "{ " + base + "^2(𝑚𝑜𝑑 " + modulus + ") \u2261 " + (base * base) + "(𝑚𝑜𝑑 " + modulus + ") \u2261 " + ((base * base) % modulus) + "(𝑚𝑜𝑑 " + modulus + ") }";
    return {result, calculationSteps};
}

/**
 * This function is used in order to calculate modulus and handle potential shortcuts using Fermat's little theorem or Euler's theorem.
 * @param base
 * @param exponent
 * @param modulus
 * @param theoremExponent
 * @returns {{result: number, calculationSteps: string}}
 */
function innerModulusCalculation(base, exponent, modulus, theoremExponent) {
    let result;
    let n = Math.floor(exponent / theoremExponent);
    let remainder = exponent % theoremExponent;

    let calculationSteps = base + "^" + exponent + " \u2261 ((" + base + "^" + theoremExponent + ")^(" + n;
    if (remainder !== 0) {
        calculationSteps += "+" + remainder + "))(𝑚𝑜𝑑 " + modulus + ") \u2261 1^" + n + "(𝑚𝑜𝑑 " + modulus + ") * " +
            base + "^" + remainder + "(𝑚𝑜𝑑 " + modulus + ") \u2261 1(𝑚𝑜𝑑 " + modulus + ") * ";

        const __ret = splittingModulus(base, remainder, modulus, true);
        result = __ret.result;
        calculationSteps += __ret.calculationSteps;
    } else {
        calculationSteps += "))(𝑚𝑜𝑑 " + modulus + ") \u2261 1^" + n + "(𝑚𝑜𝑑 " + modulus + ") \u2261 1(𝑚𝑜𝑑 " + modulus + ")";
        result = 1;
    }

    return {calculationSteps, result};
}

/**
 * Calculate an exponential modulus, given the base, exponent and modulus.<br/>
 * The algorithm will identify whether the base and modulus are co-prime ( gcd(base, modulus)=1 ) in order to use
 * Fermat (if modulus is prime) or Euler otherwise. And if they are not co-prime, then it will factorize the exponent to
 * small integers such that we can calculate them like HIT expects, a.k.a noobs.
 * @param base of base^exponent(mod modulus)
 * @param exponent of base^exponent(mod modulus)
 * @param modulus of base^exponent(mod modulus)
 * @returns {string|{value: number, calculationSteps: string}}
 */
export const exponentialModulus = (base, exponent, modulus) => {
    if ((base < 1) || (exponent < 0) || (modulus < 1)) {
        return 'You must enter base>=1, exponent>=0 and modulus >=1 in order to calculate b^e(mod m)';
    }

    try {
        let calculationSteps = "";
        let isSolved = false;
        let result = 1;
        if (exponent >= (modulus - 1)) {
            let gcdBM = gcd(base, modulus);

            if (typeof gcdBM === 'string' || gcdBM instanceof String) {
                return gcdBM;
            }

            calculationSteps = gcdBM.calculationSteps + "\n";
            if (gcdBM.value === 1) {
                let theoremExponent;
                calculationSteps += "base and modulus are co-prime numbers, and modulus is ";

                if (isPrime(modulus)) {
                    calculationSteps += "a prime number. \u21D2 Using Fermat's little theorem. b^(m-1) \u2261 1(𝑚𝑜𝑑 m)\n\n";
                    theoremExponent = modulus - 1;
                } else {
                    calculationSteps += "not a prime number. \u21D2 Using Euler's theorem. b^\u03C6(m) \u2261 1(𝑚𝑜𝑑 m)\n\n";
                    let eulerFunc = eulerFormula(modulus);

                    if (typeof eulerFunc === 'string' || eulerFunc instanceof String) {
                        return eulerFunc;
                    }

                    theoremExponent = eulerFunc.value;
                    calculationSteps += eulerFunc.calculationSteps + "\n";
                }

                const __ret = innerModulusCalculation(base, exponent, modulus, theoremExponent);
                calculationSteps += __ret.calculationSteps;
                result = __ret.result;
                isSolved = true;
            } else {
                calculationSteps += "base and modulus are not co-prime numbers. GCD differs from 1. \u21D2 Factorize the exponent:\n";
            }
        } else {
            calculationSteps += "exponent is lower than modulus-1. \u21D2 Factorize the exponent:\n";
        }

        if (!isSolved) {
            const __ret = splittingModulus(base, exponent, modulus);
            result = __ret.result;
            calculationSteps += __ret.calculationSteps;
        }

        return {
            value: result,
            calculationSteps: "Answer: " + base + "^" + exponent + " \u2261 " + result + "(𝑚𝑜𝑑 " + modulus + ")\nCheck steps below:\n\n" + calculationSteps
        };
    } catch (e) {
        return 'Error has occurred while executing ExponentialMod Algorithm: ' + e;
    }
};