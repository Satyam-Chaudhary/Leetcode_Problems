/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.lenght < 3) return [];
    let res = [];
    res = hashMapSol(nums, res);
    return res;


};


function twoPointerSol(nums,res) {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        const a = nums[i];
        if (a > 0) break; //if 1st one is positive and the arr is sorted it would never become zero

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const threeSum = a + nums[left] + nums[right];
            if (threeSum > 0) {
                right--;
            } else if (threeSum < 0) {
                left++;
            } else {
                res.push([a, nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }

            }
        }
    }
    return res;
};

function hashMapSol(nums, res){
    nums.sort((a, b) => a - b); 

    for (let i = 0; i < nums.length; i++) {
        const a = nums[i];

        if (a > 0) break; 
        if (i > 0 && a === nums[i - 1]) continue; 

        const target = -a;
        const seen = new Set();
        for (let j = i + 1; j < nums.length; j++) {
            const b = nums[j];
            const complement = target - b;

            if (seen.has(complement)) {
                res.push([a, complement, b]);

                while (j + 1 < nums.length && nums[j + 1] === b) {
                    j++;
                }
            }

            
            seen.add(b);
        }
    }

    return res;
}
