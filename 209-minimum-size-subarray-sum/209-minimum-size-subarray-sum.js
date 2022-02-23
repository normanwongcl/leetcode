/** Using sliding window pattern, O(n) - Time | O(n) - Space
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
  let windowStart = 0,
    windowSum = 0,
    minLength = Infinity;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowSum += nums[windowEnd];

    // shrink the windoe as small as possible until windowSum is less than target
    while (windowSum >= target) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= nums[windowStart];
      windowStart++;
    }
  }

  if (minLength === Infinity) {
    return 0;
  }

  return minLength;
};
