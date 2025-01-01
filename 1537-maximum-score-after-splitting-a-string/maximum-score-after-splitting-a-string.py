class Solution:
    def maxScore(self, s: str) -> int:
        totalOnes = s.count('1')
        maxScore = 0
        zeros, ones = 0, 0
        for i in range(len(s) - 1):
            if s[i] == '0':
                zeros += 1
            else:
                ones += 1
            score = zeros + (totalOnes - ones)
            maxScore = max(score, maxScore)
        
        return maxScore

            
