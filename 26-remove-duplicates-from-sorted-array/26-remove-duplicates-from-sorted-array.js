/** Using two-pointers, O(n) Time, O(1) Space
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  // index of the next non-duplicate element
  let nextNonDuplicates = 1;

  let i = 0;

  while (i < nums.length) {
    if (nums[nextNonDuplicates - 1] !== nums[i]) {
      nums[nextNonDuplicates] = nums[i];
      nextNonDuplicates++;
    }
    i++;
  }

  return nextNonDuplicates;
};
