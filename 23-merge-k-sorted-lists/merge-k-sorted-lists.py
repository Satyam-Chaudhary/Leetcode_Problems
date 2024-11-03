# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        nodesArray = []
        for list in lists:
            while list:
                nodesArray.append(list.val)
                list = list.next

        nodesArray.sort()
        dummy = ListNode(0)
        curr = dummy
        for node in nodesArray:
            curr.next = ListNode(node)
            curr = curr.next
        return dummy.next

