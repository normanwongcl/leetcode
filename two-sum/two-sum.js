/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const cache = {};
    
    for (let index = 0; index < nums.length; index++) {
	    const potentialMatch = target - nums[index];

		if (potentialMatch in cache) {
			return [cache[potentialMatch], index]
		} else {
			cache[nums[index]] = index;
		}
	}
	return []
};