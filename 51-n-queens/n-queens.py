class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        col = set()
        board = [['.']*n for i in range(n)]
        res = []

        posDiag = set() #{r-c}
        negDiag = set() #{r+c}


        def backTrack(r):
            if r == n:
                copy = ["".join(row) for row in board]
                res.append(copy)
                return
            for c in range(n):
                if c in col or (r - c) in negDiag or (r + c) in posDiag:
                    continue
                col.add(c)
                posDiag.add(r+c)
                negDiag.add(r-c)
                board[r][c] = 'Q'

                backTrack(r+1)

                col.remove(c)
                posDiag.remove(r+c)
                negDiag.remove(r-c)
                board[r][c] = '.'

        backTrack(0)

        return res



                


        