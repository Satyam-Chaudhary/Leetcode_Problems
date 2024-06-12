/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if(!head) return head;
    let cn = head; // current node
    while(cn !== null){
        if(cn.child !== null){
            let childN = cn.child; //child Node
            while(childN.next !== null){
                childN = childN.next;
            }
            childN.next = cn.next;
            if(childN.next !== null){
                childN.next.prev = childN;
            }
            cn.child.prev = cn;
            cn.next = cn.child;
            cn.child = null;
        }
        cn = cn.next;
    }
    return head;
};