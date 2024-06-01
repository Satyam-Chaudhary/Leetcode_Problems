/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
//    let A = buildString(s);
//    let B = buildString(t);
//   if(A === B){
//     return true;
//    }else{
//     return false;
//    }
    let p1 = s.length - 1, p2 = t.length - 1;
    while(p1 >= 0 || p2 >= 0){
        if(s[p1] === '#' || t[p2] === '#'){
            if(s[p1] === '#'){
                let backcount = 2;
                while(backcount > 0){
                    p1--;
                    backcount--;
                    if(s[p1] === '#'){
                        backcount += 2;
                    }
                }
            }
            if(t[p2] === '#'){
                let backcount = 2;
                while(backcount > 0){
                    p2--;
                    backcount--;
                    if(t[p2] === '#'){
                        backcount += 2;
                    }
                }
            }
        }else{
            if(s[p1] !== t[p2]){
                return false;
            }else{
                p1--;
                p2--;
            }
        }
    }
    return true;

};

// function buildString(t){
//     let B = [];
//     for(let i = 0; i < t.length; i++){
//     if(t[i] !== '#'){
//         B.push(t[i]);
//     }
//     if(t[i] === '#' && t.length !== 0){
//             B.pop();
//     }
//    }
//    return B.join('');
// }