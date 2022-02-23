/** O(n) - Time | O(1) Space
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let maxSum = nums[0], currentSum = nums[0];

  for (let index = 1; index < nums.length; index++) {
      currentSum = Math.max(nums[index], currentSum + nums[index]);
      
      if (currentSum > maxSum) {
          maxSum = currentSum;
      }
  }
  return maxSum;
};
