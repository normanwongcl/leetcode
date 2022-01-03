/** Recursion Approach | O(n) Time | O(n) Space
 * @param {string} - s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  const alphaNumericString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
  return validatePalindrome(alphaNumericString);
};

/** Recursion Helper Function
 * @param {string} - s
 * @param {number} - index 
 * @return {boolean}
 */
const validatePalindrome = (s, index = 0) => {
  // Use a pointer to track the equivalent index of the second half of the string
  const secondHalfIndex = s.length - 1 - index;
	
  // end the recursion if index >= secondHalfIndex and return true
  return index >= secondHalfIndex ? true: s[index] === s[secondHalfIndex] && validatePalindrome(s, index + 1);
};