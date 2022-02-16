/** Using hashmap, O(n) - Time | O(1) Space
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = function(s, t) {
    // compare the length of both strings
    if (s.length !== t.length) return false;
    
    // intialize hashmap
    const alphabetCounter = {};
    
    // Loop through first string and update hashmap counter
    for (let char of s) {
        alphabetCounter[char] = (alphabetCounter[char] || 0) + 1;
    }
    
    // Loop through second string, check if value exist in hashmap, decrement the value
    for (let char of t) {
        if (!alphabetCounter[char]) {
            return false;
        }
        alphabetCounter[char]--;
    }
    return true;
};