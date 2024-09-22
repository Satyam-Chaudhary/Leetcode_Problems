/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    return searchElement(matrix, target);
};



function searchElement(matrix, target) {
    let m = matrix.length; // no of rows
    let n = matrix[0].length; // no of cols

    let l = 0;
    let h = (m * n) - 1;

    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
        let r = Math.floor(mid / n);
        let c = mid % n;

        if (matrix[r][c] === target) return true;
        else if (matrix[r][c] < target) l = mid + 1;
        else { h = mid - 1 };

    }

    return false;
};