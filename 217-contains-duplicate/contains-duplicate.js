/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hm = {};
    for(let i = 0 ; i < nums.length; i++){
        if(hm[nums[i]] !== undefined){
            return true;
        }else{
            hm[nums[i]] = i;
        }
    }
    return false;
};