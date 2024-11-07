# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        finalRes = []
        

        def bfsSol(root):
            queue = deque()
            queue.append(root)

            while queue:
                clLength = len(queue) #current - level length
                cla = [] # current-level array

                for i in range(0, clLength):
                    x = queue.popleft()
                    cla.append(x.val)
                    if x.left:
                        queue.append(x.left)
                    if x.right:
                        queue.append(x.right)
                finalRes.append(cla)

        def dfsSol(node, level):
            if not node:
                return
            if level == len(finalRes):
                finalRes.append([])
            finalRes[level].append(node.val)
            dfsSol(node.left, level+1)
            dfsSol(node.right, level+1)

        # bfsSol(root)
        dfsSol(root, 0)

        return finalRes


            

       


        