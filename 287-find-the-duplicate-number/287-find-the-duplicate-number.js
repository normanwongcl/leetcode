/** Using JavaScript built-in set
 * O(n) Time | O(n) Space
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = (nums) => {
    const set = new Set();
    
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (!set.has(element)) {
            set.add(element);
        } else {
            return element;
        }
    }
    return -1;
};