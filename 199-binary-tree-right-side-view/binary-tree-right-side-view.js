/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    // return bfsSolution(root);
    if (!root) return [];
    let level = 0;
    let res = [];
    // let hm = {};
    return dfsSolution2nd(root, level, res);
};



function dfsSolution(cn, level, res, hm) {
    function dfsSol(cn, level) {
        if (hm[level] === undefined) { //!hm[level]
            res.push(cn.val);
            hm[level] = cn.val; // hm[level] = true
        }
        if (cn.right) dfsSol(cn.right, level + 1);
        if (cn.left) dfsSol(cn.left, level + 1);
        return res;
    }
    return dfsSol(cn, level);
}


function bfsSolution(root) {
    if (!root) return [];
    let q = [root];
    let res = [];
    while (q.length) {
        let clLength = q.length;//current level length
        let cn;
        for (let i = 0; i < clLength; i++) {
            cn = q.shift();
            if (cn.left) q.push(cn.left);
            if (cn.right) q.push(cn.right);
        }
        res.push(cn.val);
    }
    return res;
}

function dfsSolution2nd(cn,level,res){
    if(level >= res.length){
        res.push(cn.val);
    }
    if (cn.right) dfsSolution2nd(cn.right, level + 1,res);
    if (cn.left) dfsSolution2nd(cn.left, level + 1,res);
    return res;
}