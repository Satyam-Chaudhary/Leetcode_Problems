class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        count = 0
        dp = {}
        def BranchAndBoundSol(index, currentSum, remSum):
            nonlocal count
            if (currentSum + remSum < target or currentSum - remSum > target):
                return
            if index == len(nums):
                if currentSum == target:
                    count += 1
                return
            BranchAndBoundSol(index + 1, currentSum + nums[index], remSum - nums[index])
            BranchAndBoundSol(index + 1, currentSum  - nums[index], remSum - nums[index])
        
        # totalSum = sum(nums)
        # BranchAndBoundSol(0, 0, totalSum)
        # return count

        dp = {} # (ind, currSum) -> number of ways
        def dpSol(ind, currSum): 
            if (ind, currSum) in dp:
                return dp[(ind, currSum)]
            if ind == len(nums):
                return 1 if currSum == target else 0
            add = dpSol(ind + 1, currSum + nums[ind])
            sub = dpSol(ind + 1, currSum - nums[ind])

            dp[(ind, currSum)] = add + sub
            return dp[(ind, currSum)]
        # return dpSol(0,0)

        def dp2dSol():
            n = len(nums)
            dp = [defaultdict(int) for _ in range(n+1)]
            dp[0][0] = 1 # no of ways to get sum 0 with 0 elements i.e 1 way

            for i in range(len(nums)):
                for currSum , count in dp[i].items():
                    dp[i+1][currSum + nums[i]] += count
                    dp[i+1][currSum - nums[i]] += count

            # print(dp)

            return dp[len(nums)][target]
        
        # return dp2dSol()

        def optimized2dDpSol():
            dp = defaultdict(int)
            dp[0] = 1

            for i in range(len(nums)):
                nextDp = defaultdict(int)
                for currSum, count in dp.items():
                    nextDp[currSum + nums[i]] += count
                    nextDp[currSum - nums[i]] += count
                dp = nextDp
            
            return dp[target]

        return optimized2dDpSol()

            

