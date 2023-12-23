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
    ListNode* deleteMiddle(ListNode* head) {
        auto p =head, q = head;
        ListNode *r = nullptr;

        if(head == NULL || head->next == NULL){
            return nullptr;
        }

        while(p != nullptr && p->next != nullptr){
            p = p->next->next;
            r = q;
            q = q->next;
        }
        r->next = q->next;
        q->next = nullptr;
        delete q;

        return head;
    }
};