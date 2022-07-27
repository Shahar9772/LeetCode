var assert = require("assert");
const TreeNode = require("./utils/tree-node");

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length == 0) return null;

  if (nums.length == 1) return new TreeNode(nums[0]);

  const middleElementIndex = Math.floor(nums.length / 2);

  const root = new TreeNode(nums[middleElementIndex]);

  root.left = sortedArrayToBST(nums.slice(0, middleElementIndex));
  root.right = sortedArrayToBST(nums.slice(middleElementIndex + 1));

  return root;
};

const root = sortedArrayToBST([1, 3]);

assert(root.val === 3);
assert(root.left.val === 1);
assert(root.right === null);
