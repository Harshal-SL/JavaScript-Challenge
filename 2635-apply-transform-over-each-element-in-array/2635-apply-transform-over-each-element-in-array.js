/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArray = [];

    arr.forEach((element , index) => {
        newArray[index] = fn(element , index);
    })

    return newArray;
};