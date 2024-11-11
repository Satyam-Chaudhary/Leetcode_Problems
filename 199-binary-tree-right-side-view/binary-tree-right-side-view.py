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
        
        def bfs(root):

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
        def dfs(root):
            res = []
            def dfsSol(node, depth):
                if not node:
                    return

                
                if len(res) == depth:
                    res.append(node.val)

                dfsSol(node.right, depth + 1)
                dfsSol(node.left, depth + 1)
            
            dfsSol(root, 0)
            return res


        return dfs(root)        
        # bfs(root)

        
        # return finalRes
            
