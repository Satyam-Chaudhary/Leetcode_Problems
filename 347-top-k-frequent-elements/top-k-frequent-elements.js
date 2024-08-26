/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    }

    heapifyUp(index) {
        let currentIndex = index;
        while (currentIndex > 0) {
            const parentIndex = this.getParentIndex(currentIndex);
            if (this.heap[currentIndex][0] < this.heap[parentIndex][0]) {
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown(index) {
        let currentIndex = index;
        while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
            let smallerChildIndex = this.getLeftChildIndex(currentIndex);
            if (
                this.getRightChildIndex(currentIndex) < this.heap.length &&
                this.heap[this.getRightChildIndex(currentIndex)][0] < this.heap[smallerChildIndex][0]
            ) {
                smallerChildIndex = this.getRightChildIndex(currentIndex);
            }
            if (this.heap[currentIndex][0] > this.heap[smallerChildIndex][0]) {
                this.swap(currentIndex, smallerChildIndex);
                currentIndex = smallerChildIndex;
            } else {
                break;
            }
        }
    }

    size() {
        return this.heap.length;
    }
}


var topKFrequent = function (nums, k) {

    //TC --> O(nlogn) sort
    // let hm = {};
    // for(num of nums){
    //     if(!hm[num]){
    //         hm[num] = 1;
    //     }else{
    //         hm[num] += 1;
    //     }
    // }
    // const sortedArr = Object.entries(hm).sort((a,b) => b[1] - a[1]);
    // console.log(sortedArr);
    // let finalArr = [];
    // for(let i = 0; i< k ; i++){
    //     finalArr.push(sortedArr[i][0]);
    // }  
    // return finalArr;

    //TC -> O(nlogk) minHeap

    // const freqMap = new Map();
    // nums.forEach(num => {
    //     freqMap.set(num, (freqMap.get(num) || 0) + 1);
    // });

    // const minHeap = new MinHeap();
    // freqMap.forEach((freq, num) => {
    //     minHeap.push([freq, num]);
    //     if (minHeap.size() > k) {
    //         minHeap.pop();
    //     }
    // });

    // const topKFreq = [];

    // while (minHeap.size() > 0) {
    //     topKFreq.push(minHeap.pop()[1]);
    // }

    // return topKFreq;

    //TC -> O(n) BUCKET SORT SC -> O(n)
    let freqMap = new Map();
    let arr = new Array(nums.length + 1).fill(0);
    let ans = [];

    nums.forEach((num) => {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    })

    for (let [key, val] of freqMap) {
        const prev = arr[val] || [];
        prev.push(key);
        arr[val] = prev;
    };

    for (let i = arr.length; i >= 0; i--) {
        if (k < 1) break;
        if (arr[i]) {
            for (let el of arr[i]) {
                ans.push(el);
                k--;
            }
        }
    }
    return ans;
};