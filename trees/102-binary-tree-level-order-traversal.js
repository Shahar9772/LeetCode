var assert = require('assert');
const TreeNode = require('./utils/tree-node');

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];
  let curr = [root];
  let next = [];

  while (curr.length !== 0) {
    const levelRes = [];

    for (let node of curr) {
      if (node) {
        levelRes.push(node.val);
        next.push(node.left, node.right);
      }
    }

    if (levelRes.length !== 0) res.push(levelRes);
    curr = next;
    next = [];
  }

  return res;
};

//test
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

let expectedStr = '';
[[3], [9, 20], [15, 7]].forEach((numArr) => {
  expectedStr += numArr.join(',') + ',';
});
expectedStr = expectedStr.slice(0, -1);

let resultStr = '';
levelOrder(root).forEach((numArr) => {
  resultStr += numArr.join(',') + ',';
});
resultStr = resultStr.slice(0, -1);

console.log(resultStr, '\t', expectedStr);
assert(expectedStr == resultStr);
