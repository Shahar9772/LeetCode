var assert = require("assert");
const TreeNode = require("./utils/tree-node");

/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  count = 0;

  /**
   * @param {TreeNode} root
   * @param {number}   pathMaxVal
   * @return {void}
   */
  const traverseDFS = (root, pathMaxVal) => {
    if (!root) return;

    if (root.val >= pathMaxVal) count++;

    const currMax = Math.max(root.val, pathMaxVal);

    traverseDFS(root.left, currMax);
    traverseDFS(root.right, currMax);
  };

  traverseDFS(root, root.val);

  return count;
};

let root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);

root.left.left = new TreeNode(3);

root.right.left = new TreeNode(1);
root.right.right = new TreeNode(5);
assert(goodNodes(root) === 4);
