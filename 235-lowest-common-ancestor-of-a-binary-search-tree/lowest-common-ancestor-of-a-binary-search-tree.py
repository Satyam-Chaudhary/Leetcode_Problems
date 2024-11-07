# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        # if p.val == root.val or q.val == root.val:
        #     return root
        # if p.val < root.val < q.val or p.val > root.val > q.val:
        #     return root
        # if p.val < root.val and q.val < root.val:
        #     return self.lowestCommonAncestor(root.left, p,q)
        # if p.val > root.val and q.val > root.val:
        #     return self.lowestCommonAncestor(root.right, p, q)

        return self.betterCode(root, p, q)

    def betterCode(self,root, p,q):
        if p.val < root.val and q.val < root.val:
            return self.betterCode(root.left,p,q)
        elif p.val > root.val and q.val > root.val:
            return self.betterCode(root.right,p,q)
        else:
            return root

        
        