class Solution:
    def addSpaces(self, s: str, spaces: List[int]) -> str:
        dq = deque(spaces)
        res = []
        li = 0 #last Index of the string 
        for i in range(len(s)):
            if dq and dq[0] == i:
                res.append(s[li:i])
                res.append(' ')
                dq.popleft()
                li = i
            if i == len(s) - 1:
                res.append(s[li:i+1])
        
        return ''.join(res)

