var assert = require("assert");

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  closeToOpen = { ")": "(", "}": "{", "]": "[" };

  for (let char of s) {
    if (closeToOpen[char]) {
      if (stack.at(-1) && stack.at(-1) === closeToOpen[char]) {
        stack.pop();
      } else {
        return false;
      }
    } else stack.push(char);
  }

  return !stack.at(-1) ? true : false;
};

assert(isValid("()") === true);
assert(isValid("{()") === false);
