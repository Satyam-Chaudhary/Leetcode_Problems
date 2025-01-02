class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        def dpBottomUp():
            one = len(cost) - 2
            two = len(cost) - 1

            i = len(cost) - 3
            while(i >= 0):
                cost[i] = min((cost[i] + cost[one]), (cost[i] + cost[two]))
                temp = one
                two = one
                one = i
                i -= 1
            return min(cost[0], cost[1])

        def dpTopDown():

            cache = [-1]*len(cost)
            def costToReachTop(i):
                if i >= len(cost):
                    return 0
                if cache[i] != -1:
                    return cache[i]
                cache[i] = cost[i] + min(costToReachTop(i+1), costToReachTop(i+2))
                return cache[i]
            
            return min(costToReachTop(0), costToReachTop(1))


        # return dpTopDown()
        return dpBottomUp()





        