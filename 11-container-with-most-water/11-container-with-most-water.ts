const maxArea = (heights: number[]): number => {
  // define initial maxArea, leftPointer, rightPointer
  let [maxArea, left, right]: number[] = [0, 0, heights.length - 1];

  while (left < right) {
    let height: number = Math.min(heights[left], heights[right]);
    let width: number = right - left;
    let area: number = height * width;

    if (maxArea < area) {
      maxArea = area;
    }

    // Only move the pointer with the lowest height
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
