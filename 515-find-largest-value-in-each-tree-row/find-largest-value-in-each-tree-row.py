# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def largestValues(self, root: Optional[TreeNode]) -> List[int]:

        if not root:
            return []

        queue = deque()
        result = []
        queue.append(root)

        while(queue):
            levelMax = float('-inf')
            for _ in range(len(queue)):
                node = queue.popleft()
                levelMax = max(levelMax, node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            result.append(levelMax)
        
        return result
                


