/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 双指针（快慢指针）
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let fast = ListNode(), slow = ListNode();
    fast = slow = head;
    // 先走n步
    while(n > 0) {
        fast = fast.next;
        n--;
    };
    if(fast === null) {
        return head.next;
    }
    while(fast !== null && fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};