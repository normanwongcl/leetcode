/** Using sliding window pattern - O(n) - Time | O(1) Space
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let maxSum = -Infinity,
    windowSum = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowSum += nums[windowEnd];

    if (windowSum <= nums[windowEnd]) {
      windowSum = nums[windowEnd];
    }

    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
};
