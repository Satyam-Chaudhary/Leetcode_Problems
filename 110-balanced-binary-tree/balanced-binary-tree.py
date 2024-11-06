# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        # return self.checkBalance(root) != -1
        self.balanced = True
        self.checkBalanceTree(root)
        return self.balanced

    def checkBalanceTree(self, node):
        if not node:
            return 0
        left = self.checkBalanceTree(node.left)
        right = self.checkBalanceTree(node.right)

        if abs(left - right) > 1:
            self.balanced = False
            return 0

        return 1 + max(left,right)

    def checkBalance(self,node):
        if not node:
            return 0
        left = self.checkBalance(node.left)
        if left == -1:
            return -1
        right = self.checkBalance(node.right)
        if right == -1:
            return -1
        if abs(left - right) > 1:
            return -1
        return 1 + max(left, right)
    

    def brute(root):
        if not root:
            return True
        left = self.getHeight(root.left)
        right = self.getHeight(root.right)

        if abs(left-right) > 1:
            return False
        
        return self.isBalanced(root.left) and self.isBalanced(root.right)
    def getHeight(self,node):
        if not node:
            return 0
        return 1 + max(self.getHeight(node.left), self.getHeight(node.right))
