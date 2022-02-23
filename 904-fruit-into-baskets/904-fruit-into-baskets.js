/** Using sliding window pattern, O(n) - Time | O(k) space, where k is number of distinct characters.
 * @param {number[]} fruits
 * @return {number}
 */
const totalFruit = (fruits) => {
  let windowStart = 0,
    maxLength = 0,
    fruitFrequency = {};

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    let currentChar = fruits[windowEnd];

    if (!fruitFrequency[currentChar]) {
      fruitFrequency[currentChar] = 1;
    } else {
      fruitFrequency[currentChar]++;
    }

    // shrink the sliding window until we are have "k" distinct characters in charFrequency
    while (Object.keys(fruitFrequency).length > 2) {
      fruitFrequency[fruits[windowStart]]--;

      if (fruitFrequency[fruits[windowStart]] === 0) {
        delete fruitFrequency[fruits[windowStart]];
      }
      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};
