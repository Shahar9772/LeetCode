var assert = require("assert");
const TreeNode = require("./utils/tree-node");

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  let curr_level = [root];
  let next_level = [];

  while (curr_level.length) {
    for (const node of curr_level) {
      if (node) {
        next_level.push(node.left, node.right);

        const temp = node.left;
        node.left = node.right;
        node.right = temp;
      }
    }

    curr_level = next_level;
    next_level = [];
  }

  return root;
};

//test
let root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
invertTree(root);
assert(root.left.val === 3);
assert(root.right.val === 1);
