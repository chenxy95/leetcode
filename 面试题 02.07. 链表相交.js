/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 假设两个链表公共部分长度为c, node节点为相交节点，则A到相交节点走a+(b-c)，B到相交节点要走b+(a-c);所以两个指针走到相交节点的距离相同。即当两个指针第一次相等时，为相交节点。
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let A = headA, B = headB;
    while(A!==B) {
        A = A !== null ? A.next : headB;
        B = B!==null ? B.next : headA;
    }
    return A;
};