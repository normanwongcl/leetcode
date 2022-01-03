// Recursion Approach | O(n) Time | O(n) Space
const isPalindrome = (s: string): boolean => {
    const alphaNumericString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    return validatePalindrome(alphaNumericString);
};

const validatePalindrome = (s: string, index: number = 0): boolean => {
    // Use a pointer to track the equivalent index of the second half of the string
	const secondHalfIndex = s.length - 1 - index;
	
	// end the recursion if index >= secondHalfIndex and return true
    return index >= secondHalfIndex ? true: s[index] === s[secondHalfIndex] && validatePalindrome(s, index + 1);
};

// Functional approach
//
// const isPalindrome = (s: string): boolean => {
//     const alphaNumericString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
//     return alphaNumericString === alphaNumericString.split('').reverse().join('');
// };
