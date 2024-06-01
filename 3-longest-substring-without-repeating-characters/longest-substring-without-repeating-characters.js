/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    for(let p = 0; p < s.length; p++){
        let hm = new Map();
        let cl = 0;
        for(let q = p ; q< s.length; q++){
            if(hm.get(s[q]) >= 0){
                hm.clear();
                break;
            }
            hm.set(s[q] , q);
            cl++;
            longest = Math.max(longest , cl);
        }
    }
    return longest;
};