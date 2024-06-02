/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    if(s.length === 0) return true;
    return method2(s);
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

 const method2 = function(s){
    let l = Math.floor(s.length/2);
    let r = l;
    if(s.length % 2 === 0){
        l--;
    }

    while(l >= 0 && r < s.length){
        if(s[l] !== s[r]){
         return false;   
        }
        l--;
        r++;
    }
    return true;
 }