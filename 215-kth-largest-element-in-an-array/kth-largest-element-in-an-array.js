/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(arr, k) {
    // let left = 0;
    // let right = arr.length - 1;
    // quickSort(arr, left, right);
    const indexToFind = arr.length - k;
    const arr2 = arr.sort(function(a,b){return a-b});
    return arr[indexToFind];
    
};

// const quickSort = function(arr, left, right){
//     if(left < right){
//         const partionIndex = partion(arr, left, right);
//         quickSort(arr, left, partionIndex - 1);
//         quickSort(arr, partionIndex + 1, right);
//     }
// };

// const partion = function(arr, left, right){
//     const pivotElement = arr[right];
//     let partionIndex = left;
//     for(let j = left; j < right; j++){
//         if(arr[j] < pivotElement){
//             swap(arr, partionIndex, j);
//             partionIndex++;
//         }
//     }
//     swap(arr, partionIndex, right);
//     return partionIndex;
// }

// const swap = function(arr, i, j){
//     const temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }