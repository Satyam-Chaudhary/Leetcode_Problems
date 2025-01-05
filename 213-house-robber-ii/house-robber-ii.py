class Solution:
    def rob(self, nums: List[int]) -> int:

        def getMaxRob(arr):
            rob1 , rob2 = 0, 0 
            for n in arr:
                temp = max(rob1 + n, rob2)
                rob1 = rob2 
                rob2 = temp
            return rob2

        if not nums:
            return 0
        if len(nums) == 1:
            return nums[0]
        
        # return max(getMaxRob(nums[0:len(nums) -1]), getMaxRob(nums[1: len(nums)]))
        return max(getMaxRob(nums[:-1]), getMaxRob(nums[1:]))