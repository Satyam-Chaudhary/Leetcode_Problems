/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2;
    if(!list2) return list1;

    let res = new ListNode() ;
    let cn = res; // current node

    while(list1!==null && list2 !== null){
        if(list1.val <= list2.val){
            cn.next = list1;
            list1 = list1.next;
        }else{
            cn.next = list2;
            list2 = list2.next;
        }
        cn = cn.next;
    };
    if(list1 !== null) cn.next = list1;
    if(list2 !== null) cn.next = list2;

    return res.next;
};