class Solution {
public:
    bool isPalindrome(int n) {
    auto rn = 0LL; // reverse number
    auto dup = n; //duplicate for check
    while(n > 0){
        auto ld = n % 10;
        n /= 10;
        rn = (rn * 10) + ld;
    }
    if(rn == dup)
        return true;
    else 
        return false;
    }
};