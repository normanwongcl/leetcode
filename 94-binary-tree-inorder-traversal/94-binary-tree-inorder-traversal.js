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
const inorderTraversal = (root, list = []) => {
  if (!root) {
    return [];
  }

  if (root.left) {
    inorderTraversal(root.left, list);
  }

  list.push(root.val);

  if (root.right) {
    inorderTraversal(root.right, list);
  }
  return list;
};
