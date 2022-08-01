var assert = require("assert");
const TreeNode = require("./utils/tree-node");

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  const res = [];

  if (!root) return res;

  let currLevel = [root];
  let nextLevel = [];

  while (currLevel.length) {
    for (let node of currLevel) {
      if (node) {
        if (node.left) nextLevel.push(node.left);
        if (node.right) nextLevel.push(node.right);
      }
    }

    res.push(currLevel.at(-1).val);

    currLevel = nextLevel;
    nextLevel = [];
  }

  return res;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);

const res = rightSideView(root);
const expected = [1, 3, 4];

assert(JSON.stringify(res) === JSON.stringify(expected));
