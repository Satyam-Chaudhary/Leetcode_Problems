# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        count = 0

        def recursiveMaxDepth(node,count):
            if not node:
                return count
            count +=1 

            return max(recursiveMaxDepth(node.left,count), recursiveMaxDepth(node.right,count))

        return recursiveMaxDepth(root, count)
        
        