class Solution:
    def rob(self, nums: List[int]) -> int:
        rob1 , rob2 = 0, 0 # rob1 -> max rob till i-2 rob2 -> max rob till rob-1 i-> current house

        for n in nums:
            currRobDecison = max(n + rob1, rob2)
            rob1 = rob2
            rob2 = currRobDecison

        return rob2
