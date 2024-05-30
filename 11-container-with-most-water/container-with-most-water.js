/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // let maxArea = 0;
    // for(let p1 = 0; p1 < height.length; p1++){
    //     for(let p2 = p1+1; p2 < height.length; p2++){
    //         const length = Math.min(height[p1], height[p2]);
    //         const width = p2 - p1;
    //         const area = length * width;
    //         maxArea = Math.max(maxArea, area);
    //     }
    // }
    // return maxArea;

    let p1 = 0, p2 = height.length - 1, maxArea= 0;
    while(p1 < p2){
        let length = Math.min(height[p1], height[p2]);
        let width = p2 - p1;
        let area = length * width;
        maxArea = Math.max(maxArea, area);

        if(height[p1] < height[p2]){
            p1++;
        }else{
            p2--;
        }
    }
    return maxArea;
};