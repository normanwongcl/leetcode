/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/** Using Fast & Slow pointer pattern, O(n) Time, O(1) Space
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  let slowPointer = head,
    fastPointer = head;

  while (fastPointer != null && fastPointer.next != null) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;

    if ((fastPointer === slowPointer)) {
      return true;
    }
  }
  return false;
};
