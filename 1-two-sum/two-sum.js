/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // for(let p1 = 0; p1 < nums.length; p1++){
    //     const ntf = target - nums[p1]; //number to find
    //     for(let p2 = p1 + 1; p2< nums.length; p2++){
    //         if(ntf === nums[p2]){
    //             return [p1,p2];
    //         }
    //     }
    // }
    // return null;
    numsMap = {};
    for(let p = 0; p < nums.length; p++){
        let currentMapVal = numsMap[nums[p]];
        if(currentMapVal >= 0){
            return [currentMapVal, p];
        }else{
            const ntf = target - nums[p];
            numsMap[ntf] = p;
        }
    }
    return null;
};