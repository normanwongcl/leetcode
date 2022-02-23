/** Using two-pointers pattern, O(n) Time | O(n) Space
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
  const arrayLength = nums.length,
    squaredArray = Array(arrayLength).fill(0);
  let leftIndex = 0,
    rightIndex = arrayLength - 1,
    highestSquaredIndex = arrayLength - 1;

  while (leftIndex <= rightIndex) {
    let leftSquared = nums[leftIndex] * nums[leftIndex];
    let rightSquared = nums[rightIndex] * nums[rightIndex];

    if (leftSquared > rightSquared) {
      squaredArray[highestSquaredIndex] = leftSquared;
      leftIndex++;
    } else {
      squaredArray[highestSquaredIndex] = rightSquared;
      rightIndex--;
    }
    highestSquaredIndex--;
  }
  return squaredArray;
};
