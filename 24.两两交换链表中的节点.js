/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    let dummyHead = new ListNode(0, head);
    let cur = dummyHead;
    while(cur.next && cur.next.next) {
        let temp = cur.next;
        let temp1 = cur.next.next.next;

        // 三步走
        cur.next = cur.next.next;
        cur.next.next = temp;
        cur.next.next.next = temp1;

        cur = cur.next.next;
    }
    return dummyHead.next;
};