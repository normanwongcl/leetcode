/** Using memoization to cache computed answer
 *  O(n) - Time | O(n) - Space
 * 
 * @param {number} n
 * @return {number}
 */
const fib = n => {
    const memoize = {};
    for (let i = 0; i <= n; i++) {
        if (i < 2)   memoize[i] = i;
        else memoize[i] = memoize[i-2] + memoize[i-1];
    }
    return memoize[n];
}