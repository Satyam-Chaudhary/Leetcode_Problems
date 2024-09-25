/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    //case for no rotation
    const n = nums.length;
    //case for rotation
    return binaryApproach(nums,n);

};

function binaryApproach(nums,n){
    let l = 0;
    let r = n-1;

    let res = Infinity;
    // works only for rotated sorted array

    while(l <= r){
        let mid = Math.floor((l+r)/2);
        //sorted sub array
        if(nums[l] < nums[r]){
            res = Math.min(res, nums[l]); // [4,5,1,2,3] 1 is reached before reaching sorted subarray therfore min
            break;
        }
        res = Math.min(res, nums[mid]);
        // is in sorted left subArray
        if(nums[mid] >= nums[l]){ // = for edge case when mid on left
            l = mid + 1;
        }
        // if in sorted right subArray
        else{
            r = mid - 1;
        }
    };


    return res;
    
};