
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, node: Optional[TreeNode]) -> bool:
        def isValid(node, min, max):
            if not node:
                return True
            if not (min < node.val < max):
                return False
            leftSub = isValid(node.left, min, node.val)
            rightSub = isValid(node.right, node.val, max)
            return leftSub and rightSub
        
        return isValid(node, float('-inf'), float('inf'))
