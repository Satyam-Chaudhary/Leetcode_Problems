class Solution:
    def climbStairs(self, n: int) -> int:
        count = 0
        def recursiveSol(stair):
            nonlocal count
            if (stair == n):
                count += 1
                return
            if stair > n:
                return
            recursiveSol(stair + 1)
            recursiveSol(stair + 2)
        
        # recursiveSol(0)
        # return count

        dp = [-1] * (n + 1)
        def dpSol(stair):
            nonlocal count
            if stair > n:
                return 0
            if stair == n:
                return 1
            if dp[stair] != -1:
                return dp[stair]
            dp[stair] = dpSol(stair + 1) + dpSol(stair + 2)
            return dp[stair]

        return dpSol(0)          



        