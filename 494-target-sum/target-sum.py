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

        dp = {}
        def dpSol(ind, currSum):
            if (ind, currSum) in dp:
                return dp[(ind, currSum)]
            if ind == len(nums):
                return 1 if currSum == target else 0
            add = dpSol(ind + 1, currSum + nums[ind])
            sub = dpSol(ind + 1, currSum - nums[ind])

            dp[(ind, currSum)] = add + sub
            return dp[(ind, currSum)]
        return dpSol(0,0)