/** Using merge sort, O(nlog(n)) - Time | O(nlog(n)) - Space
 * @param {number[]} nums
 * @return {number[]}
 */

const sortArray = (nums) => {
  if (nums.length <= 1) return nums;

  let halfIndex = Math.floor(nums.length / 2);
  let firstSubArray = nums.slice(0, halfIndex);
  let secondSubArray = nums.slice(halfIndex);

  return merge(sortArray(firstSubArray), sortArray(secondSubArray));
};

const merge = (subArray1 = [], subArray2 = []) => {
  const sortedList = [];

  while (subArray1.length !== 0 || subArray2.length !== 0) {
    // Compare the value of the 2 subArray
    if (subArray1[0] < subArray2[0]) {
      // Remove the value from the first index and push it to the new array
      sortedList.push(subArray1.shift());
    } else if (subArray2[0] < subArray1[0]) {
      sortedList.push(subArray2.shift());
    } else if (subArray1.length === 0) {
      sortedList.push(subArray2.shift());
    } else {
      sortedList.push(subArray1.shift());
    }
  }
  return sortedList;
};
