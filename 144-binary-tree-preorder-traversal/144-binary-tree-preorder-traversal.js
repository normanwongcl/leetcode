/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = (root, list = []) => {
  if (!root) {
    return [];
  }

  list.push(root.val);

  if (root.left) {
    preorderTraversal(root.left, list);
  }
  if (root.right) {
    preorderTraversal(root.right, list);
  }
  return list;
};
