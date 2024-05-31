/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
   let A = checkString(s);
   let B = checkString(t);
  if(A === B){
    return true;
   }else{
    return false;
   }
};

function checkString(t){
    let B = [];
    for(let i = 0; i < t.length; i++){
    if(t[i] !== '#'){
        B.push(t[i]);
    }
    if(t[i] === '#' && t.length !== 0){
            B.pop();
    }
   }
   return B.join('');
}