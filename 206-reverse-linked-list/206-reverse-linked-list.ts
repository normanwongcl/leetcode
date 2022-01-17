/** O(n) Time | O(1) Space
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

const reverseList = (head: ListNode | null): ListNode | null => {
    let [current, prev]: (ListNode | null)[] = [head, null]; 
    
    while(current) {
        let newTemp = current.next;
        current.next = prev; 
        prev = current;  
        current = newTemp;
    }
    return prev;
};