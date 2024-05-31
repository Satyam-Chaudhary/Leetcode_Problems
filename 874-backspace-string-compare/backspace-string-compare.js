/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
   let A = [];
   let B = [];
   for(let i = 0; i < s.length; i++){
    if(s[i] !== '#'){
        A.push(s[i]);
    }
    if(s[i] === '#' && s.length !== 0){
            A.pop();
    }
   }

    for(let i = 0; i < t.length; i++){
    if(t[i] !== '#'){
        B.push(t[i]);
    }
    if(t[i] === '#' && t.length !== 0){
            B.pop();
    }
   }

   if(A.join('') === B.join('')){
    return true;
   }else{
    return false;
   }
};