/**
 * Check, based on recursion, how many occurrences of length n there are, answering the condition 'contains' or
 * 'not contains' some specified value. For example, how many occurrences there are of length 4, that do not contain
 * '002', given the alphabet is [0, 1, 2].<br/>
 * A more complex example, how many occurrences of length 3 that contain '00' but not contain '01'. Alphabet: [0,1,2], valuesArray: ['00', '!01']
 * @param n The length to check
 * @param alphabetArray Array containing the alphabet. e.g. [0, 1, 2] or [a, b, c]
 * @param valuesArray The values to check if they are contained (or not, based on '!' prefix for each value) in a string of length n.
 * @returns {string|{count: number, calculationSteps: string}}
 */
export const recursiveFunc = (n, alphabetArray, valuesArray) => {
    if (n < 1) {
        return 'n must be greater or equal to 1.'
    }

    // Don't go too deeply in recursion to avoid of failures
    if (n > 10) {
        return 'n is too big. Maximum supported length is 10'
    }

    let count = fRec(n, '', alphabetArray, valuesArray);

    return {
        count: count,
        calculationSteps: 'Found ' + count + ' occurrences'
    }
};


/**
 * A helper recursive function, to count occurrences of length n, that contains or not some value.
 * @param n The length to check
 * @param currString A string we build recursively out of all options using the specified alphabet
 * @param alphabetArray Array containing the alphabet. e.g. [0, 1, 2] or [a, b, c]
 * @param valuesArray The values to check if they are contained (or not, based on '!' prefix for each value) in a string of length n.
 * @returns {number}
 */
function fRec(n, currString, alphabetArray, valuesArray) {
    let count = 0;
    if (n === 1) {
        for (let i = 0; i < alphabetArray.length; i++) {
            let theString = currString + alphabetArray[i];
            let shouldCount = true;
            for (let j = 0; j < valuesArray.length; j++) {
                let value = valuesArray[j];
                if (value.startsWith('!')) {
                    if (theString.includes(value.substr(1))) {
                        shouldCount = false;
                    }
                } else if (!theString.includes(value)) {
                    shouldCount = false;
                }
            }

            if (shouldCount) {
                count++;
            }
        }
    } else {
        for (let i = 0; i < alphabetArray.length; i++) {
            count += fRec(n - 1, (currString + alphabetArray[i]), alphabetArray, valuesArray);
        }
    }

    return count;
}