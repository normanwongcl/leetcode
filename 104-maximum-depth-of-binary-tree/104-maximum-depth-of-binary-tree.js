/** O(n) - Time | O(log(n)) Space
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root, currentDepth = 0) => {
    if (!root) {
        return currentDepth;
    }
    
    currentDepth++;
    
    return Math.max(maxDepth(root.left, currentDepth), maxDepth(root.right, currentDepth));
};