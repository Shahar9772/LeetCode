var assert = require("assert");

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  const arr = new Array(n + 1).fill(0);

  arr[0] = 1;
  arr[1] = 1;

  for (let i = 2; i < arr.length; ++i) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
};

assert(climbStairs(3) === 3);
