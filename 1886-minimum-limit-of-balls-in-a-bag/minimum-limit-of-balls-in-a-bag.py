class Solution:
    def minimumSize(self, nums: List[int], maxOperations: int) -> int:

        def isPenalty(threshold):
            ops = 0 #operations
            for n in nums:
                # print(ops)
                ops += ceil(n / threshold) - 1
                if (ops > maxOperations):
                    return False
            return True
        
        l,r = 1, max(nums)

        while(l < r):
            m = (l+r)//2
            if (isPenalty(m)):
                r = m
            else:
                l = m+1

        return r                


