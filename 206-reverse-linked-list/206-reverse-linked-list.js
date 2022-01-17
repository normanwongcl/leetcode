/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/** Using recursion - O(n) Time | O(n) Space
 * Picture visualizing the recusion: https://i.imgur.com/F8R3eVA.png
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
    if (head === null || head.next === null) {
        return head;
    }
    let p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};