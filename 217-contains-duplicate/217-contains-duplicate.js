/** Using an object as a Set
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    const set = {};
    
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (!set[element]) {
            set[element] = true;;
        } else {
            return true;
        }
    }
    return false;
};