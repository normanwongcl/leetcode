/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** Using BFS - O(n) - Time | O(D) Space, where D is the tree diameter
 * @param {TreeNode} root
 * @return {number[]}
 */

const rightSideView = (root) => {
  // If root is null return an empty array
  if (!root) return [];

  let currentNode = root;
  let result = [];
  let queue = [];
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
      currentLevel.push(currentNode.val);
    }

    result.push(currentLevel[currentLevel.length - 1]);
  }

  return result;
};
