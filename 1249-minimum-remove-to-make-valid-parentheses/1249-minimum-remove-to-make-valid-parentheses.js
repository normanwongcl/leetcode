/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = (s) => {
  // Algorithmn O(n) - Time | O(n) Space
  // loop through the string
  //      store each left bracket index in a stack
  //      if right bracket, pop the stack
  // any left-bracket remaining in the stack will be replaced with ""
  if (s.length === 0) return "";

  let listofChars = s.split("");
  let stack = [];

  for (let index = 0; index < listofChars.length; index++) {
    if (listofChars[index] === "(") {
      stack.push(index);
    } else if (listofChars[index] === ")" && stack.length) {
      stack.pop();
    } else if (listofChars[index] === ")") {
      listofChars[index] = "";
    }
  }

  while (stack.length > 0) {
    let value = stack.pop();
    listofChars[value] = "";
  }

  return listofChars.join("");
};
