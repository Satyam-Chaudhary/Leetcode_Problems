/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let cn = head;
    const seenNodes = new Set();

    if(!head) return null;

    while(!seenNodes.has(cn)){
        if(cn.next === null){
            return null;
        }
        seenNodes.add(cn);
        cn = cn.next;
    }

    return cn;
};