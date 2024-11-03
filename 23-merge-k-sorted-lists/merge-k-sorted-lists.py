# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
import heapq
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        return self.heapMethod(lists)

    def bruteForce(self,lists):
        nodesArray = []
        for l in lists:
            while l:
                nodesArray.append(l.val)
                l = l.next
        nodesArray.sort()
        dummy = ListNode(0)
        curr = dummy
        for node in nodesArray:
            curr.next = ListNode(node)
            curr = curr.next
        return dummy.next

    def heapMethod(self, lists):
        heap = []
        for idx, l in enumerate(lists):
            if l:
                heapq.heappush(heap, (l.val,idx,l))
        
        dummy = ListNode(0)
        curr = dummy
        
        while heap:
            val,idx,node = heapq.heappop(heap)
            curr.next = ListNode(val)
            curr = curr.next
            if node.next:
                heapq.heappush(heap, (node.next.val, idx, node.next))

        return dummy.next