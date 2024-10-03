/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return optimal(nums,target);
};

function searchRes(nums,target){
    let pivot = findPivot(nums);
    if(target === nums[pivot]) return pivot;
    if(target >= nums[0] && target <= nums[pivot-1]){
        return modifiedBinarySearch(nums,0,pivot-1,target);
    }else{
        return modifiedBinarySearch(nums,pivot,nums.length - 1,target);
    }

};

function findPivot(nums){
    let[l,r] = [0, nums.length - 1];
    while(r > l){ // not l<=r as if == then infinite loop
        let mid = Math.floor((l+r)/2);
        if(nums[mid] > nums[r]){
            l = mid + 1;
        }else{
            r = mid;
        }
    }
    console.log(l);
    return l;
};

function modifiedBinarySearch(nums,l,r,target){
    while(l <= r){
        let mid = Math.floor((l+r)/2);
        if(nums[mid] === target) return mid;
        if(nums[mid] < target){
            l = mid + 1;
        }else{
            r = mid - 1;
        }
    }
    return -1;
};


function optimal(nums,target){
    let [l,r] = [0,nums.length - 1];
    while(l <= r){
        let mid = Math.floor((l+r)/2);
        if(nums[mid] === target) return mid;

        //left sorted portion
        if(nums[l] <= nums[mid]){
            if(nums[mid] < target || target < nums[l]){
                l = mid + 1;
            }else{
                r = mid - 1;
            }
        }else{
        //right soretd array
        
        if(nums[mid] > target || target > nums[r]){
            r = mid - 1;
        }else{
            l = mid + 1;
        }
        }
    };
    return -1;
}

