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
    // let cn = head;
    // const seenNodes = new Set();

    // if(!head) return null;

    // while(!seenNodes.has(cn)){
    //     if(cn.next === null){
    //         return null;
    //     }
    //     seenNodes.add(cn);
    //     cn = cn.next;
    // }

    // return cn;

    // FLOYD"S HARE AND TORTOISE ALGO. FOR CYCLE DETECTION IN LL

    if(!head) return null;
    let h = head, t = head; //hare and tortoise
    while(true){
        h = h.next;
        t = t.next;
        if(h === null || h.next === null){
            return null;
        }else{
            h = h.next;
        }
        if(t === h) break;
    }
    let p1 = head, p2 = h; // meeting point
    while(p1 !== p2){
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
};