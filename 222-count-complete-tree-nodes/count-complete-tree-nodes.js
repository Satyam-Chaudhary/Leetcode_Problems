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
 * @return {number}
 */
var countNodes = function (root) {
    if (!root) return 0;

    let h = getHeight(root);
    if (h === 1) return 1;
    let upperNodes = Math.pow(2, h - 1) - 1;
    let mln = Math.pow(2, h - 1); // max last level nodes
    let left = 0;
    let right = mln - 1;
    let mid, midVal;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        midVal = navigateToNode(root, mid, mln, h);
        if (midVal !== null) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    let lowerNodes = left; // lower level nodes
    return (lowerNodes + upperNodes);
};

function getHeight(cn) {
    let count = 0;
    while (cn !== null) {
        count++;
        cn = cn.left;
    }
    return count;
}

function navigateToNode(cn, mid, mln, h) {
    let l = 0; // left
    let r = mln - 1; // right
    let newMid; // to calculate the node is on left subtree or right subtree
    for (let i = 0; i < h - 1; i++) {
        newMid = Math.floor((l + r) / 2);
        if (mid <= newMid) { // left subtree
            r = newMid - 1;
            cn = cn.left;
        } else {
            l = newMid + 1;
            cn = cn.right;
        }
    }

    return cn !== null ? cn.val : null;
}
