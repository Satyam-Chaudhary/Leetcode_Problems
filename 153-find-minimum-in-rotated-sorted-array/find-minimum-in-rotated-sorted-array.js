/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    //case for no rotation
    const n = nums.length;
    //case for rotation
    return optimalApproach(nums, n);
};

// function binaryApproach(nums, n) {
//     let l = 0;
//     let r = n - 1;

//     let res = Infinity;
//     // works only for rotated sorted array

//     while (l <= r) {
//         let mid = Math.floor((l + r) / 2);
//         //sorted sub array
//         if (nums[l] < nums[r]) {
//             res = Math.min(res, nums[l]); // [4,5,1,2,3] 1 is reached before reaching sorted subarray therfore min
//             break;
//         }
//         res = Math.min(res, nums[mid]);
//         // is in sorted left subArray
//         if (nums[mid] >= nums[l]) { // = for edge case when mid on left // [1] or [2,1]
//             l = mid + 1;
//         }
//         // if in sorted right subArray
//         else {
//             r = mid - 1;
//         }
//     };
//     return res;
// };


function optimalApproach(nums,n){
    let [l,r] = [0,n-1];

    let res = Infinity;

    while(l <= r){
        let mid = Math.floor((l+r)/2);
        if(n <= 1) return nums[l]
        if(nums[l] < nums[r]){ // sorted array or right sorted array
            return nums[l];
            break;
        }

        res = Math.min(res, nums[mid]);
        if(nums[mid] >= nums[l]){
            l = mid + 1;
        }else{
            r = mid
        }
    };
    return nums[l];
}

var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let pivot = (left + right) >> 1;

        if (nums[pivot] < nums[nums.length - 1]) {
            right = pivot;
        }
        if (nums[pivot] >= nums[nums.length -1]) {
            left = pivot + 1;
        }
    }

    return nums[right];
};