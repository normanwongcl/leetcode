// Using the built-in Set object
const containsDuplicate = (nums: number[]): boolean => {
    const set: Set<number> = new Set();
    
    for (let index = 0; index < nums.length; index++) {
        if (!set.has(nums[index])) {
            set.add(nums[index]);
        } else {
            return true;
        }
    }
    return false;
};