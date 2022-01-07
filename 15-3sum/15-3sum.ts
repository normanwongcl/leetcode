type Triplet = [number, number, number];

// Using 2-pointers
const threeSum = (nums: number[]): number[][] => {
    nums.sort((a, b) => a - b);
	const triplets:Triplet[] = [];
	
	for (let i =0; i< nums.length - 2; i++) {
		let left = i + 1;
		let right = nums.length - 1;
        if (nums[i-1] !== nums[i] || i === 0) {
            while (left < right) {
                const currentSum = nums[i] + nums[left] + nums[right];

                if (currentSum === 0) {
                    triplets.push([nums[i], nums[left], nums[right]]);
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
}