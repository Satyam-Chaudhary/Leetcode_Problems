/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    function bfsSol(p, q) {
    const p1 = [];  
    const p2 = []; 

    p1.push(p);
    p2.push(q);

    while (p1.length > 0 && p2.length > 0) {
        const nodeP = p1.shift();
        const nodeQ = p2.shift();

        if (nodeP === null && nodeQ === null) {
            continue;
        }
        if (nodeP === null || nodeQ === null || nodeP.val !== nodeQ.val) {
            return false;
        }

        p1.push(nodeP.left);
        p1.push(nodeP.right);
        p2.push(nodeQ.left);
        p2.push(nodeQ.right);
    }

    return true;
}
    return bfsSol(p,q)
};