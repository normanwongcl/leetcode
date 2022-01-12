/** O(n) - Time | O(1) - Space
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (heights) => {
    // define initial maxArea, leftPointer, rightPointer
    let [maxArea, left, right] = [0, 0, heights.length - 1]
    
    while (left < right) {
        let height = Math.min(heights[left], heights[right]);
        let width = right - left;
        let area = height * width;
        
        if (maxArea < area) {
            maxArea = area;
        }
        
        // Only move the pointer with the lowest height
        if (heights[left] < heights[right]) {
            left++
        } else {
            right--;
        }
    }
    return maxArea;
};