/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    //   let total = 0, maxL = 0, maxR = 0;
    //   for(let p = 0; p < height.length; p++){
    //     maxR = 0;
    //     console.log({'p' : p});
    //     console.log(maxL);
    //       maxL = Math.max(maxL , height[p]);
    //       console.log({'maxL' : maxL});
    //       for(let q = p+1; q < height.length ; q++){
    //           maxR = Math.max(maxR, height[q]);
    //       }
    //       console.log({'maxR' : maxR});
    //       let currentWater = Math.min(maxL, maxR) - height[p];
    //       console.log({'currentWater' : currentWater});
    //       if(currentWater > 0){
    //           total += currentWater;
    //       }
    //   }
    //   return total;
    // let total = 0;
    // for (let p = 0; p < height.length; p++) {
    //     let maxL = 0, maxR = 0;
    //     let leftP = p, rightP = p;

    //     while (leftP >= 0) {
    //         maxL = Math.max(height[leftP], maxL);
    //         leftP--;
    //     }
    //     while (rightP < height.length) {
    //         maxR = Math.max(height[rightP], maxR);
    //         rightP++;
    //     }

    //     let currentWater = Math.min(maxL, maxR) - height[p];
    //     if (currentWater >= 0) {
    //         total += currentWater;
    //     }
    // }
    // return total;
let maxL = 0, maxR = 0;
  let lp = 0 , rp = height.length - 1;
  let total = 0;

  while(lp < rp){
      let cw = 0;
      if(height[lp] < height[rp]){
          maxL = Math.max(maxL , height[lp]);
          cw = maxL- height[lp];
          lp++;
      }else{
          maxR = Math.max(maxR, height[rp]);
          cw = maxR - height[rp];
          rp--;
      }
      if(cw > 0){
          total += cw;
      }
  }
  return total;
}; 