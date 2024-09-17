/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    let hm = {
        '+': (a,b) => a + b,
        '-': (a,b) => b - a,
        '*': (a,b) => a * b,
        '/': (a,b) => Math.trunc(b/a)
    }

    let i = 0;
    while (i < tokens.length) {
        if (hm[tokens[i]]) {
            // get 2 out , do the operation and put it back 
            let a = stack.pop();
            let b = stack.pop();
            let res = hm[tokens[i]](a,b);
            stack.push(res);
        } else {
            stack.push(Number(tokens[i])); // convert to number
        }
        i++;
    }

    return stack.pop();

};