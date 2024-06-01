/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) return s.length;
    let longest = 0;
    // for(let p = 0; p < s.length; p++){
    //     let hm = new Map();
    //     let cl = 0;
    //     for(let q = p ; q< s.length; q++){
    //         if(hm.get(s[q]) >= 0){
    //             hm.clear();
    //             break;
    //         }
    //         hm.set(s[q] , q);
    //         cl++;
    //         longest = Math.max(longest , cl);
    //     }
    // }
    // return longest;


    // for(let left = 0; left < s.length; left++){
    //     let seenChar = {};
    //     let cl = 0; // current length
    //     for(let right = left; right < s.length; right ++){
    //         const cc = [s[right]] // current Char
    //         if(!seenChar[cc]){
    //             cl++;
    //             seenChar[cc] = true;
    //             longest = Math.max(longest, cl);
    //         }else{
    //             break;
    //         }
    //     }
    // }
    // return longest;
    let l = 0, r = 0, cl = 0;
    let hm = {}; //hashmap
    while (r != s.length) {
        if (hm[s[r]] >= 0 && hm[s[r]] >= l) {
            l = hm[s[r]] + 1;
        }
        hm[s[r]] = r;
        cl = (r - l) + 1;
        longest = Math.max(cl, longest);
        r++;
    }
    return longest;
};