# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        # self.dfsApproach(root)
        self.bfsApproach(root)
        return root

    def dfsApproach(self, node):
        if not node:
            return
        self.dfsApproach(node.left)
        self.dfsApproach(node.right)
        tmp = node.left
        node.left = node.right
        node.right = tmp
        return
    
    def bfsApproach(self, node):
        if not node:
            return 
        queue = deque()
        queue.append(node)

        while len(queue) > 0:
            node = queue.popleft() 
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
            tmp = node.left
            node.left = node.right
            node.right = tmp
    

            
