/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    // const res = [];
    // function backTracking(currentString, open, close) { //DFS APPROACH
    //     if(currentString.length === 2*n){
    //         res.push(currentString);
    //         return;
    //     }

    //     if(open < n){
    //         backTracking(currentString + '(', open+1, close);
    //     }

    //     if(close < open){
    //         backTracking(currentString + ')', open, close+1);
    //     }

    //     return; //can be omitted as it auto returned at end
    // }

    // backTracking('', 0, 0);
    // return res;

    let res = bfsSolution(n);
    return res;
};

function bfsSolution(n){
    const res = [];
    const queue = [{s:'', open: 0, close:0}];

    while(queue.length > 0){
        const {s, open, close} = queue.shift();

        if(s.length === 2*n){
            res.push(s);
            continue;
        }

        if(open < n){
            queue.push({s: s+'(', open: open+1, close:close})
        }

        if(close<open){
            queue.push({s: s+')', open:open, close:close+1})
        }
    }
    return res;
}

