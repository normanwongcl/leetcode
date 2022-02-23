/** Using sliding window pattern, O(n) - Time | O(k) space, where k is number of distinct characters.
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const lengthOfLongestSubstringKDistinct = (s, k) => {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let currentChar = s[windowEnd];

    if (!charFrequency[currentChar]) {
      charFrequency[currentChar] = 1;
    } else {
      charFrequency[currentChar]++;
    }

    // shrink the sliding window until we are have "k" distinct characters in charFrequency
    while (Object.keys(charFrequency).length > k) {
      charFrequency[s[windowStart]]--;

      if (charFrequency[s[windowStart]] === 0) {
        delete charFrequency[s[windowStart]];
      }
      windowStart++;
    }

    // Evaluate the maxLength vs current window length
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};
