var assert = require("assert");

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const getType = (char) => {
    if ("()".includes(char)) return 0;
    if ("[]".includes(char)) return 1;
    if ("{}".includes(char)) return 2;
  };

  const isClose = (char) => {
    if ("]})".includes(char)) return true;
    return false;
  };

  const stack = [];
  let topIdx = -1;

  for (let char of s) {
    if (isClose(char)) {
      const topChar = stack[topIdx];
      if (topIdx == -1) return false;

      if (!isClose(topChar) && getType(char) === getType(topChar)) {
        --topIdx;
      } else {
        return false;
      }
    } else {
      ++topIdx;
      stack[topIdx] = char;
    }
  }

  if (topIdx !== -1) return false;

  return true;
};

assert(isValid("()") === true);
assert(isValid("{()") === false);
assert(isValid("{()}") === true);
