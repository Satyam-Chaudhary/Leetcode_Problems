/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = x.toString();
    let flag = false;
    if(num[0] === '-') flag = true;

    let op = '';
    for(let i = num.length - 1; i >= 0; i--){
        if(num[i] !== '-') {
            op += num[i];
        }
    }

    let result = Number(op);
    if(flag) result = -result;

    // 32-bit integer range check
    if(result < -(2**31) || result > 2**31 - 1) return 0;

    return result;
};
