/** Using 2-pointers
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const triplets = [];

  for (let index = 0; index < nums.length - 2; index++) {
    let left = index + 1;
    let right = nums.length - 1;
    if (nums[index - 1] !== nums[index] || index === 0) {
      while (left < right) {
        const currentSum = nums[index] + nums[left] + nums[right];

        if (currentSum === 0) {
          triplets.push([nums[index], nums[left], nums[right]]);
          left++;
          right--;
          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }
        } else if (currentSum < 0) {
          left++;
        } else if (currentSum > 0) {
          right--;
        }
      }
    }
  }
  return triplets;
};
