var assert = require("assert");

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isBalanced = function (root) {
  getHeight = function (root) {
    if (!root) return 0;

    const leftChildHeight = getHeight(root.left);
    if (leftChildHeight === -1) return -1;

    const rightChildHeight = getHeight(root.right);
    if (rightChildHeight === -1) return -1;

    if (Math.abs(leftChildHeight - rightChildHeight) > 1) return -1;

    const myHeight = Math.max(leftChildHeight, rightChildHeight) + 1;

    return myHeight;
  };

  if (getHeight(root) === -1) return false;
  else return true;
};

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
assert(isBalanced(root));

root = new TreeNode();
assert(isBalanced(root));

root = new TreeNode();
root.left = new TreeNode();
assert(isBalanced(root));

root = new TreeNode();
root.left = new TreeNode();
root.left.left = new TreeNode();
assert(!isBalanced(root));
