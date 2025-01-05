class Solution:
    def longestPalindrome(self, s: str) -> str:
        if not s or len(s) == 1:
            return s  # If the string is empty or has only one character, return it as is.

        def expand_around_center(left, right):
            # Expand while the substring is a palindrome
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
            # Return the substring after expanding
            return s[left + 1:right]

        longest = ""
        for i in range(len(s)):
            # Case 1: Odd-length palindrome (center is one character)
            odd_palindrome = expand_around_center(i, i)
            # Case 2: Even-length palindrome (center is between two characters)
            even_palindrome = expand_around_center(i, i + 1)
            
            # Update the longest palindrome
            if len(odd_palindrome) > len(longest):
                longest = odd_palindrome
            if len(even_palindrome) > len(longest):
                longest = even_palindrome

        return longest
