/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/** Using fast-and-slow pointer pattern, O(N) Time | O(1) Space
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
  let fast = head,
    slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow; // The resulting node of the slow pointer is the middle of the linked list
};
