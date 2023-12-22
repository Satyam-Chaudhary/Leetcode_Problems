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
    ListNode* middleNode(ListNode* head) {
        auto p = head, q = head;
        auto count = 0;
        while(p != NULL){
            count++;
            p = p->next;
        }

        // auto middle = count/2;
        for(int i = 0; i < count/2; i++){
            q = q->next;
        }
        return q;
    }
};