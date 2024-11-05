# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.maxDiameter = 0

        def getMaxDepth(node):
            if not node:
                return 0
            left = getMaxDepth(node.left)
            right = getMaxDepth(node.right)

            # nonlocal maxDiameter
            self.maxDiameter = max(self.maxDiameter, (left + right))
            # print(self.maxDiameter)

            return 1 + max(left,right)

        
        getMaxDepth(root)
        return self.maxDiameter



            

            
        
        print(getMaxDepth(root))

       

