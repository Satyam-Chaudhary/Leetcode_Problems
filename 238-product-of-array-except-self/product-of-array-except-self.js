/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // O(n2)
    // if(nums.length <= 1) return [];
    // let answer = new Array(nums.length);
    // for(let i = 0; i < nums.length; i++){
    //     let leftProduct = 1;
    //     for(let j = 0; j < i; j++){
    //         leftProduct = leftProduct * nums[j];
    //     }
    //     let rightProduct = 1;
    //     for(let k = nums.length - 1; k > i; k--){
    //         rightProduct = rightProduct * nums[k];
    //     }
    //     let product = leftProduct * rightProduct;
    //     answer[i] = product;
    // }
    // return answer;


    let answer = new Array(nums.length).fill(1);
    let pre = 1;
    for (let i = 0; i < nums.length - 1; i++){
        pre = pre * nums[i];
        answer[i+1] = pre;
    }
    let post = 1;
    for (let j = nums.length - 1; j > 0; j--){
        post = post * nums[j];
        answer[j-1] = answer[j-1] * post;
    }
    return answer;
};

function badSpaceComp(nums){
    const prefix = new Array(nums.length);
    const postfix = new Array(nums.length);
    const answer = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            prefix[i] = 1 * nums[i];
            continue;
        }
        prefix[i] = prefix[i - 1] * nums[i];
    }

    for (let j = nums.length - 1; j >= 0; j--) {
        if (j === nums.length - 1) {
            postfix[j] = 1 * nums[j];
            continue;
        }
        postfix[j] = postfix[j + 1] * nums[j];
    }

    for (let i = 0; i < nums.length; i++) {
        if (prefix[i - 1] === undefined) {
            answer[i] = 1 * postfix[i + 1];
            continue;
        } if (postfix[i + 1] === undefined) {
            answer[i] = prefix[i - 1] * 1;
            continue;
        }
        answer[i] = prefix[i - 1] * postfix[i + 1];

    }
    // console.log(prefix);
    // console.log(postfix);
    // console.log(answer);
    return answer;
}