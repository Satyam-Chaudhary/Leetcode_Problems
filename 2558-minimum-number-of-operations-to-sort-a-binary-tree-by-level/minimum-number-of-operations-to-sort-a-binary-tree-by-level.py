# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minimumOperations(self, root: Optional[TreeNode]) -> int:
        

        def calculate_swaps(level):
            swaps = 0
            sortedLevel = sorted(level)

            hm = {n: i for i, n in enumerate(level)}

            for i in range(len(level)):
                if level[i] != sortedLevel[i]:
                    swaps += 1
                    j = hm[sortedLevel[i]]

                    level[i], level[j] = level[j], level[i]
                    hm[level[i]] = i
                    hm[level[j]] = j

            return swaps

        q = deque([root])
        res = 0
        while q:
            level = []
            for _ in range(len(q)):
                node = q.popleft()
                level.append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)

            res += calculate_swaps(level)
        return res
