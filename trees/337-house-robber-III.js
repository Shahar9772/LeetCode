var assert = require('assert');
const TreeNode = require('./utils/tree-node');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  const impl = (root) => {
    if (!root.left && !root.right) return { withMe: root.val, withoutMe: 0 };

    let left = { withMe: 0, withoutMe: 0 };
    let right = { withMe: 0, withoutMe: 0 };
    const res = { withMe: 0, withoutMe: 0 };

    if (root.left) left = impl(root.left);

    if (root.right) right = impl(root.right);

    res.withMe = root.val + left.withoutMe + right.withoutMe;
    res.withoutMe =
      Math.max(left.withMe, left.withoutMe) +
      Math.max(right.withMe, right.withoutMe);

    return res;
  };

  const result = impl(root);

  return Math.max(result.withMe, result.withoutMe);
};

//test
let root = new TreeNode(3);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(1);

assert(rob(root) === 7);
