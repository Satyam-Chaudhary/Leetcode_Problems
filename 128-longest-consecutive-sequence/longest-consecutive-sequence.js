/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let longestSeq = 1;
    if (nums.length === 1) {
        return longestSeq;
    }
    if(nums.length === 0) return 0;
    let hm = {}; // cam also use set
    nums.forEach(num => { //O(n)
        hm[num] = true;
    });

    for (let i = 0; i < nums.length; i++) { //O(n)
        let curr = nums[i];
        if (!hm[curr - 1]) {
            let currentSeq = 1;
            while (hm[curr + 1]) { //O(k), --> subSequence length, i.e also once so doesn't make O(n*k)
                curr++;
                currentSeq++;
            }
            longestSeq = Math.max(longestSeq, currentSeq);
        }
    }
    return longestSeq;
};

// TC -> O(n)
// SC -> O(n) 