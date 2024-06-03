/**
 * @param {string} s
 * @return {boolean}
 */

var validPalindrome = function(s) {
    let l = 0 ,r = s.length-1;
    while(l < r){
        if(s[l] !== s[r]){
        return (validRest(s, l + 1, r) || validRest(s, l , r - 1));
        }
        l++;
        r--;
        }
    return true;
};

function validRest(s, start, end){
    while(start < end){
        if(s[start] !== s[end]) return false;
        start++;
        end--;
    }
    return true;
}
