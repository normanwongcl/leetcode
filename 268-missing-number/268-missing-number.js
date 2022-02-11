/** Using hashmap, O(n) Time | O(n) Space
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
    const numsSet = new Set(nums);
    
    for (let index= 0; index < nums.length; index++) {
        if (!numsSet.has(index)) {
            return index;
        }
    }
    
    return nums.length;
};