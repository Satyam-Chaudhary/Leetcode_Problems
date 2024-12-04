class Solution:
    def canMakeSubsequence(self, str1: str, str2: str) -> bool:
        def position(str,x):
            return ord(str[x]) - ord('a')
        i, j = 0, 0
        while i < len(str1) and j < len(str2):
            if str1[i] == str2[j] or ((position(str2,j) - position(str1,i))%26) == 1:
                j +=1
            i += 1

        return j == len(str2)
            