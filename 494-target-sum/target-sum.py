class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        count = 0
        def recursiveTree(index, currentSum, remSum):
            nonlocal count
            if (currentSum + remSum < target or currentSum - remSum > target):
                return
            if index == len(nums):
                if currentSum == target:
                    count += 1
                return
            recursiveTree(index + 1, currentSum + nums[index], remSum - nums[index])
            recursiveTree(index + 1, currentSum  - nums[index], remSum - nums[index])
        
        totalSum = sum(nums)
        recursiveTree(0, 0, totalSum)
        return count