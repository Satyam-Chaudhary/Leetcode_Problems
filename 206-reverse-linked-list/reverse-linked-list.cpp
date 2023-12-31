/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        // ListNode *p = NULL, *q = head, *r = NULL;
        // if(head == NULL){
        //     return head;
        // }else{
        //    while(q != NULL){
        //        p = q->next;
        //        q->next = r;
        //        r = q;
        //        q = p;
        //    }
        //    head = r;
        // }
        // return head;

        ListNode *dummy = NULL;
        while(head != NULL){
            ListNode *Next = head->next;
            head->next = dummy;
            dummy = head;
            head = Next;
        }
        return dummy;
    }
};