class Solution:
    def addSpaces(self, s: str, spaces: List[int]) -> str:

        def first():
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

        def second():
            li , res = 0, []
            for space in spaces:
                res.append(s[li:space])
                res.append(' ')
                li = space
            res.append(s[li:])
            return ''.join(res)


        return second()
