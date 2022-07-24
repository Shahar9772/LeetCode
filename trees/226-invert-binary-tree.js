var assert = require("assert");
const TreeNode = require("./utils/tree-node");

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root || (!root.left && !root.right)) return root;

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

//test
let root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
invertTree(root);
assert(root.left.val === 3);
assert(root.right.val === 1);
