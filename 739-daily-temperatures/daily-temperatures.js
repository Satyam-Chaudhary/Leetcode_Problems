/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [];
    let n = temperatures.length;
    let output = new Array(n).fill(0);
   

    for(let i = 0; i < n; i++){
        while(stack.length > 0 && stack[stack.length -1][0] < temperatures[i]){
            let [ele, index ] = stack.pop();
            output[index] = (i - index);
        }
        stack.push([temperatures[i],i]);
    }
    return output;
        
};