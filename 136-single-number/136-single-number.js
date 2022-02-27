/** Using bitwise xor, O(n) - Time | O(1) - Space
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  let num = 0; // any value that xor to n is always n. n ^ 0 = n
  for (let i = 0; i < nums.length; i++){
    num ^= nums[i];
  }
  return num;
};