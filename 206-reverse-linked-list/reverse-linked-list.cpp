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
        ListNode *prev = nullptr;
        ListNode *current = head;
        ListNode *next = nullptr;

        while (current != nullptr) {
            next = current->next;  // Save the next node
            current->next = prev;  // Reverse the link

            // Move to the next pair of nodes
            prev = current;
            current = next;
        }

        // Update the head to the last node (now the first)
        head = prev;

        return head;
    }
};