/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const result = [];

    const dfs = (array , depth) => {
        for(const item of array){
            if(Array.isArray(item) && depth < n){
                dfs(item , depth + 1);
            } else {
                result.push(item);
            }
        }
    }

    dfs(arr,0);

    return result;
};  