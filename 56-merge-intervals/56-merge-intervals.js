/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
  // sort the intervals start
  intervals.sort((a, b) => a[0] - b[0]);

  let mergedInterval = [],
    start = intervals[0][0],
    end = intervals[0][1];

  for (let index = 1; index < intervals.length; index++) {
    const currentInterval = intervals[index];

    if (currentInterval[0] <= end) {
      // overlapping intervals
      end = Math.max(currentInterval[1], end);
    } else {
      // non-overlapping intervals
      mergedInterval.push([start, end]);
      start = currentInterval[0];
      end = currentInterval[1];
    }
  }
  mergedInterval.push([start, end]);
  return mergedInterval;
};
