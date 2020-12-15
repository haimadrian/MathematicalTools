/**
 * Break a number into its prime factors.<br/>
 * The response will be a string in case of error, or object containing two arrays: factors array contains all of the factors,
 * e.g. [2, 2, 3, 5]. And the buckets array contains each prime number and its occurrences, as object. e.g. [{prime: 2, count: 2},
 * {prime: 3, count: 1}].
 * @param n The number to get prime factors for.
 * @returns {string|{factors: [{number}], buckets: [{prime: number, count:number}]}}
 */
export const primeFactors = (n) => {
    if (n < 2 && n > -2) {
        return 'No factorial for ' + n;
    }

    try {
        let result = [];
        n = Math.abs(n);

        // Collect all 2's
        while (n%2 === 0) {
            result.push(2);
            n /= 2;
        }

        // From now on, n is odd, hence jump by 2. Note that there is no need to continue after sqrt(n)
        for (let i = 3; i <= Math.sqrt(n); i+= 2) {
            // While i divides n, collect it
            while (n%i === 0) {
                result.push(i);
                n /= i;
            }
        }

        // In case n is a prime number bigger than one, it is the only factor.
        if (n > 2) {
            result.push(n);
        }

        // So we can use it as p1^a1, p2^a2, ...
        let buckets = [];
        let prevPrimeFactor = result[0];
        let count = 1;
        for (let i = 1; i < result.length; i++) {
            if (result[i] !== prevPrimeFactor) {
                buckets.push({prime: prevPrimeFactor, count: count});
                prevPrimeFactor = result[i];
                count = 0;
            }

            count++;
        }

        // Push the last item
        buckets.push({prime: prevPrimeFactor, count: count});

        return {
            factors: result,
            buckets: buckets // So we can use it as p1^a1, p2^a2, ...
        };
    } catch (e) {
        return 'Error has occurred while executing primeFactors(' + n + ') algorithm: ' + e;
    }
};