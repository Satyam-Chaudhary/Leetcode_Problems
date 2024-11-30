# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        def sol(node, maxInPath):
            if not node:
                return 0
            isGood = 1 if node.val >= maxInPath else 0
            newMax = max(node.val, maxInPath)

            leftGood = sol(node.left, newMax)
            rightGood = sol(node.right, newMax)

            return isGood + leftGood + rightGood

        return sol(root, root.val)
