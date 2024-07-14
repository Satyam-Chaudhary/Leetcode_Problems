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
var rightSideView = function(root) {
    // return bfsSolution(root);
    if(!root) return [];
    let level = 0;
    let hm = {};
    let res = [];
    return dfsSolution(root, level, res, hm);
};



function dfsSolution(cn, level,  res, hm){
    function dfsSol(cn,level){
        if(!hm[level]){
            res.push(cn.val);
            hm[level] = true;
        }
        if(cn.right) dfsSol(cn.right, level+1);
        if(cn.left) dfsSol(cn.left, level+1);
        return res;
    }
    return dfsSol(cn,level);
}


function bfsSolution(root){
    if(!root) return[];
    let q = [root];
    let res = [];
    while(q.length){
        let clLength = q.length;//current level length
        let cn;
        for(let i = 0; i < clLength; i++){
            cn = q.shift();
            if(cn.left) q.push(cn.left);
            if(cn.right) q.push(cn.right);
        }
        res.push(cn.val);
    }
    return res;
}