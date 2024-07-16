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
    let count = 0;
    function countDfs(cn) {
        count++;
        if (cn.left) { countDfs(cn.left) }
        if (cn.right) { countDfs(cn.right) }
        return count;
    }
    return countDfs(root)
};

