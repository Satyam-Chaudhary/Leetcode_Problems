# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []
        finalRes = []
        queue = deque([root])
        

        while queue:
            clLen = len(queue)
            for i in range(clLen):
                cn = queue.popleft()
                if cn.left:
                    queue.append(cn.left)
                if cn.right:
                    queue.append(cn.right)

                if i == clLen - 1:
                    finalRes.append(cn.val)
        
        return finalRes
            
