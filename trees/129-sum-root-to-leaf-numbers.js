var assert = require("assert");
const TreeNode = require("./utils/tree-node");

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  let sum = 0;

  /**
   * @param {TreeNode} root
   * @param {string} numStr
   * @return {void}
   */
  function sumNumbersImpl(root, numStr) {
    if (!root) return;

    numStr = numStr + root.val.toString();

    if (!root.left && !root.right) {
      sum += parseInt(numStr);
      return;
    }

    sumNumbersImpl(root.left, numStr);
    sumNumbersImpl(root.right, numStr);
  }

  sumNumbersImpl(root, "");

  return sum;
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

assert(sumNumbers(root) === 25);
