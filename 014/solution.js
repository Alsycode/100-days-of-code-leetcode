
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const freqMap = new Map();
    for(let i = 0; i < arr.length;i++){
        freqMap.set(arr[i] , (freqMap.get(arr[i]) || 0) + 1);
    }
    const frequencies = [...freqMap.values()];
    console.log(frequencies)
   return frequencies.length === new Set(frequencies).size;
};
