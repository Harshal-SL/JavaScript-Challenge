/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr = [];
    let n = false;

    arr.forEach((element , index) => {
        n = fn(element , index);
        if(n){
            filteredArr.push(element);
        }
    })

    return filteredArr;
};