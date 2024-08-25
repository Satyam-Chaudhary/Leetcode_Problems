/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hm = {};
    for(num of nums){
        if(!hm[num]){
            hm[num] = 1;
        }else{
            hm[num] += 1;
        }
    }
    const sortedArr = Object.entries(hm).sort((a,b) => b[1] - a[1]);
    console.log(sortedArr);
    let finalArr = [];
    for(let i = 0; i< k ; i++){
        finalArr.push(sortedArr[i][0]);
    }  
    return finalArr;
};