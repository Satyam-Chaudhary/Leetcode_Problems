class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        def dpBottomUp(cost):
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

        return dpBottomUp(cost)



        