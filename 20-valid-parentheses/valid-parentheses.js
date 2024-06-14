/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const parens = { //hashmap
        '(': ')',
        '{': '}',
        '[': ']'
    };

    if(s.length === 0) return true; // ""
    const stack = []; //stack
    for(let i = 0; i < s.length ; i++){
        if(parens[s[i]]){
            stack.push(s[i]);
        }else{
            let leftBracket = stack.pop();
            let correctBracket = parens[leftBracket]; // right bracket for the corresponding left bracket
            if(s[i] !== correctBracket){
                return false;
            }
        }
    }
    return (stack.length === 0);
};