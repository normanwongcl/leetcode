const twoSum = (nums: number[], target: number): number[] => {
    const cache: {[key: number]: number} = {};
    
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