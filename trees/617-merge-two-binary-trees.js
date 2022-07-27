var assert = require("assert");
const TreeNode = require("./utils/tree-node");

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) return null;

  const root1Val = root1 ? root1.val : 0;
  const root1Va2 = root2 ? root2.val : 0;

  const mergedRoot = new TreeNode(root1Val + root1Va2);

  mergedRoot.left = mergeTrees(
    root1 ? root1.left : null,
    root2 ? root2.left : null
  );
  mergedRoot.right = mergeTrees(
    root1 ? root1.right : null,
    root2 ? root2.right : null
  );

  return mergedRoot;
};

const root1 = new TreeNode(1);
root1.left = new TreeNode(3);
root1.right = new TreeNode(2);
root1.left.left = new TreeNode(5);

const root2 = new TreeNode(2);
root2.left = new TreeNode(1);
root2.right = new TreeNode(3);
root2.left.right = new TreeNode(4);
root2.right.right = new TreeNode(7);

const mergedRoot = mergeTrees(root1, root2);

assert(mergedRoot.val === 3);
assert(mergedRoot.left.val === 4);
assert(mergedRoot.right.val === 5);
assert(mergedRoot.left.left.val === 5);
assert(mergedRoot.left.right.val === 4);
assert(mergedRoot.right.left === null);
assert(mergedRoot.right.right.val === 7);
