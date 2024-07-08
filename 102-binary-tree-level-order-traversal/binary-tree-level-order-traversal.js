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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let q = [root];
    let res = [];
    while (q.length) {
        let cllength = q.length; // current-level length
        let cla = []; //current level array
        let count = 0;
        while (count < cllength) {
            let cn = q.shift();
            if (cn.left) q.push(cn.left);
            if (cn.right) q.push(cn.right);
            count++;
            cla.push(cn.val);
        }
        res.push(cla);
    }
    return res;
};