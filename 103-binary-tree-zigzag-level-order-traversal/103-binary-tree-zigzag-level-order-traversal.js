/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/** Using BFS - O(n) - Time | O(n) Space
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = (root) => {
  // If root is null return an empty array
  if (!root) return [];

  let currentNode = root;
  let result = [];
  let queue = [];
  let leftToRight = true;

  queue.push(currentNode);

  while (queue.length > 0) {
    const queueLength = queue.length; // Get the length prior to dequeueing
    const currentLevel = []; // declare this level

    // loop through to exhaust all options and only to include nodes at currLevel
    for (let i = 0; i < queueLength; i++) {
      // Get next node
      currentNode = queue.shift();

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      // Check current traversal direction
      if (leftToRight) {
        currentLevel.push(currentNode.val);
      } else {
        currentLevel.unshift(currentNode.val);
      }
    }

    result.push(currentLevel);

    // reverse the traversal direction
    leftToRight = !leftToRight;
  }
  return result;
};
