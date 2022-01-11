/**
 * @param {number[]} array
 * @return {number}
 */
const longestMountain = (array) => {
    let longestMountainPeakLength = 0;
	let index = 1;
	
	while (index < array.length - 1) {
		const isPeak = array[index - 1] < array[index] && array[index + 1] < array[index];
		if (!isPeak) {
			index++;
			continue;
		}
		
		let leftIndex = index - 2;
		while (leftIndex >= 0 && array[leftIndex] < array[leftIndex + 1]) {
			leftIndex--;
		}
		let rightIndex = index + 2;
		while (rightIndex < array.length && array[rightIndex] < array[rightIndex - 1]) {
			rightIndex++;
		}
		
		const currentPeakLength = rightIndex - leftIndex - 1;
		longestMountainPeakLength = Math.max(longestMountainPeakLength, currentPeakLength);
		index = rightIndex;
	}
	return longestMountainPeakLength;
};