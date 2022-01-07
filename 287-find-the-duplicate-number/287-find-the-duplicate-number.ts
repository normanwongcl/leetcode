// Using built-in Set Object
const findDuplicate = (nums: number[]): number => {
  const set: Set<number> = new Set();

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
