var assert = require("assert");
const TreeNode = require("./utils/tree-node");

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let nodesCtr = 0;
  return Impl(root, k);

  function Impl(root, k) {
    let kthNodeVal = -1;

    if (!root.left && !root.right) {
      nodesCtr++;
      return root.val;
    }

    if (root.left) {
      kthNodeVal = Impl(root.left, k);
      if (nodesCtr === k) {
        return kthNodeVal;
      }
    }

    ++nodesCtr;
    if (nodesCtr === k) {
      return root.val;
    }

    if (root.right) {
      return Impl(root.right, k);
    }

    return root.val;
  }
};

//test
let root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.right = new TreeNode(2);

assert(kthSmallest(root, 1) === 1);
