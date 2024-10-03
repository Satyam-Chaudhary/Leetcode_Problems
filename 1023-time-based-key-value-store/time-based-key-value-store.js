
var TimeMap = function() {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.map.get(key)){
        this.map.set(key, []);
    }
    this.map.get(key).push({timestamp, value});
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(!this.map.get(key)) return '';
    let mapArr = this.map.get(key);
    let [l,r] = [0,mapArr.length - 1];

    while(l <= r){
        let mid = Math.floor((l+r)/2);
        if(mapArr[mid].timestamp === timestamp) return mapArr[mid].value;
        
        if(mapArr[mid].timestamp < timestamp){
            l = mid + 1;
        }else{
            r = mid - 1;
        }
    }

    return r >= 0 ? mapArr[r].value : '';
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */