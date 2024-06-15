/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let res = s.split('');//converts to array
    let stack = [];

    for(let i = 0; i < res.length; i++){
        if(res[i] === '('){
            stack.push(i);
        }else if(res[i] === ')' && stack.length){ //tack.length !== 0
            stack.pop();
        }else if(res[i] === ')'){
            res[i] = ''; // replaces ( with ""
        }
    }

    while(stack.length){ //!==0
        let currentIndex = stack.pop();
        res[currentIndex] = "";
    }

    return (res.join(''));
};