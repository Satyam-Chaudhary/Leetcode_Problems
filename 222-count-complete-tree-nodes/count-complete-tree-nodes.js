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

    let h = getHeight(root) - 1;
    if (h === 0) return 1;
    let upperCount = Math.pow(2, h) - 1;
    let left = 0;
    let right = upperCount;

    while (left < right) {
        let idxToFind = Math.ceil((left+right)/2);
        if(nodeExists(idxToFind, h, root)){
            left = idxToFind;
        }else{
            right = idxToFind - 1;
        }
    }
    let lowerCount = left + 1;
    return(upperCount + lowerCount)
};

function getHeight(cn) {
    let count = 0;
    while (cn !== null) {
        count++;
        cn = cn.left;
    }
    return count;
}


function nodeExists(idxToFind, h, cn){
    let left = 0;
    let right = Math.pow(2, h) - 1;
    for(let i = 0; i< h; i++){
        let midNode = Math.ceil((left+right)/2);
        if(idxToFind >= midNode){
            cn = cn.right;
            left = midNode;
        }else{
            cn = cn.left;
            right = midNode - 1;
        }
    }
    return cn !== null;
};