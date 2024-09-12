/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const hm = {}; //ntf and index of current
    for(let i = 0; i< numbers.length; i++){
        if(hm.hasOwnProperty(numbers[i])){
            return [(hm[numbers[i]] + 1), (i +1)];
        }
        else{
            const ntf = target - numbers[i];
            hm[ntf] = i;
        }
    }
    return [];
};