class Solution:
    def isPrefixOfWord(self, sentence: str, searchWord: str) -> int:
        cnt = 0
        def checkPrefix(word):
            if len(word) < len(searchWord):
                return False
            for i in range(len(searchWord)):
                if searchWord[i] == word[i]:
                    continue
                else:
                    return False
            return True
        
        x = sentence.split(' ')
        for idx, word in enumerate(x):
            if (checkPrefix(word)):
                return idx+1
        return -1

            
        