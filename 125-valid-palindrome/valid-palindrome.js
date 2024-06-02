/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    if(s.length === 0) return true;
    let l = 0, r = s.length -1;
    let len = Math.ceil(s.length);
    while(l < len){
        if(s[l] === s[r]){
            l++;
            r--;
        }else{
            return false;
        }
    }
    return true;
};