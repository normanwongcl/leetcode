interface IHash {
  [key: string]: string;
}

// Hashmap to lookup left bracket
const lookUpLeftBracket: IHash = {
  "(": ")",
  "{": "}",
  "[": "]",
};

// O(n) - Time | O(n) - Space
const isValid = (s: string, lookUp: IHash = lookUpLeftBracket) => {
  if (s.length === 0) return true;

  const stack: string[] = [];

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
