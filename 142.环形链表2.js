/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 快慢指针，快指针每次走2步，慢指针每次走1步。
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    let fast = head, slow = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        // 相遇，代表有环
        if(slow === fast) {
            let index1 = head;
            let index2 = fast;
            while(index1!==index2) {
                index1 = index1.next;
                index2 = index2.next;
            }
            return index1
        }
    }
    return null
};