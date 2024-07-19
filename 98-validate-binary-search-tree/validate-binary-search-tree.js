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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(!root) return true;
    // return dfsValid(root, -Infinity, Infinity);
    return shortenDfs(root, -Infinity, Infinity);
};


function dfsValid(node, min, max){
    if(node.val <= min || node.val >= max){
        return false;
    }

    if(node.left){
        if(!dfsValid(node.left, min, node.val)){
            return false;
        }
    }

    if(node.right){
        if(!dfsValid(node.right, node.val, max)){
            return false;
        }
    }

    return true;
}

function shortenDfs(node, min, max){

    if(!node){
        return true;
    }

    if(node.val <= min || node.val >= max){
        return false;
    }

    return (shortenDfs(node.left, min, node.val) && shortenDfs(node.right, node.val, max))
}
