/** O(n) - Time ~ O(n) - Space
 * @param {string} string to evaluate
 * @param {object} - hashmap to look up left bracket
 * @return {boolean}
 */
const isValid = (s, lookUp = lookUpLeftBracket) => {
  if (s.length === 0) return true;

  const stack = [];

  for (let index = 0; index < s.length; index++) {
    if (lookUp[s[index]]) {
      stack.push(s[index]);
    } else {
      let leftBracket = stack.pop() ?? "";
      if (s[index] !== lookUp[leftBracket]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// Hashmap to lookup left bracket
const lookUpLeftBracket = {
  "(": ")",
  "{": "}",
  "[": "]",
};
