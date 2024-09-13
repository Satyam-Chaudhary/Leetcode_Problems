/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let res = slidingWin(s,k);
    return res;
};


function slidingWin(s,k){
    let l = 0;
    let count = new Map();
    let res = 0;

    for(let r = 0; r < s.length ; r++){ //O(n)
        let winLen = r - l + 1;
        count.set(s[r], 1 + (count.get(s[r]) || 0));

        if(winLen - Math.max(...count.values()) > k){ //O(26)
            count.set(s[l] , (count.get(s[l]) - 1));
            l++;
        }
        
        winLen = r - l + 1;
        res = Math.max(res, winLen);
    }

    return res;
}