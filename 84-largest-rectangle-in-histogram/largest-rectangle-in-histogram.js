/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let res = optimal(heights);
    return res;
};


function brute(heights){ //O(n2)
    let ma = 0;
    for(let i = 0; i < heights.length; i++){
        let w = 0; // width of current rectangle
        for(let j = i; j >= 0 ; j--){
            if(heights[j] < heights[i]){
                break;
            }
            w++;
        }
        for(let k = i+1; k < heights.length ; k++){
            if(heights[k] < heights[i]) break;
            w++;
        }
        let ca = heights[i]*w;
        ma = Math.max(ca, ma);
    }
    return ma;
};

function optimal(heights){
    let stack = []; //[index,height]
    let ma = 0;

    for(let i = 0; i < heights.length ; i++){
        let start = i;;
        while(stack.length > 0 && stack[stack.length - 1][1] > heights[i]){
            let [index, height] = stack.pop();
            ma = Math.max(ma, height*(i - index));
            start = index;
        }
        stack.push([start, heights[i]]);
    };

    while(stack.length > 0){
        let [index, height] = stack.pop();
        ma = Math.max(ma, height*(heights.length - index));
    }


    return ma;

};