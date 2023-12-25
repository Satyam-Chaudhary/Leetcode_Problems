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
    ListNode* removeNthFromEnd(ListNode* head, int k) {
        // if(head == NULL || head->next == NULL){
        //     return NULL;
        // }

        // ListNode *p = head, *q = NULL, *temp = head;
        // int c = 0;
        // while(temp){
        //     c++;
        //     temp = temp->next;
        // }
        // int n = c - k + 1;

        // if(n == 1){
        //     head = head->next;
        //     delete p;
        //     return head;
        // }

        // for(int i= 0; i < n - 1 ; i++){
        //     q = p;
        //     p = p->next;
        // }
        // q->next = p->next;
        // delete p;
        // return head;

        ListNode *d = new ListNode();
        d->next = head;
        ListNode *f = d, *s = d;

        for(int i = 0 ; i < k ; i++){
            f = f->next;
        }
        while(f->next != NULL){
            f = f->next;
            s = s->next;
        }
        ListNode *p = s->next;
        s->next = s->next->next;
        delete p;
        return d->next;

    }
};