/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    if(s.length === 0) return true;
    return method1(s);
};

const method1 = function(s){
    let l = 0, r = s.length -1;
    // let len = Math.ceil(s.length);
    while(l < r){ // in odd case the middle char need not be considerd
        if(s[l] === s[r]){
            l++;
            r--;
        }else{
            return false;
        }
    }
    return true;
}