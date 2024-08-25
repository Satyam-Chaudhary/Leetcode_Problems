/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(!strs.length) return [];
    let map = new Map();
    groupWords(strs, map);
    return [...map.values()];
};

function groupWords(strs, map){
    for(str of strs){
        const hash = getHash(str);
        const values = map.get(hash) || [];
        values.push(str);
        map.set(hash, values);
    }
};

function getHash(str){
    const frequency = new Array(26).fill(0);
    for(char of str){
        const charCode = getCharCode(char);
        frequency[charCode]++;
    }
    return frequency.toString();
}

function getCharCode(word){
    return word.charCodeAt(0) - 'a'.charCodeAt(0);
}