/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const res = [];
    function backTracking(currentString, open, close) {
        if(currentString.length === 2*n){
            res.push(currentString);
            return;
        }

        if(open < n){
            backTracking(currentString + '(', open+1, close);
        }

        if(close < open){
            backTracking(currentString + ')', open, close+1);
        }

        return; //can be opitted as it auto returned at end
    }

    backTracking('', 0, 0);
    return res;
};

