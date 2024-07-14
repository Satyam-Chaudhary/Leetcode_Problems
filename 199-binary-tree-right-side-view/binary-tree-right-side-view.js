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
    return bfsSolution(root);
};

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