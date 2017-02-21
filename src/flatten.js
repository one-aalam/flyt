/**
 * Guts of `flatten` method 
 * used to flatten an array of array(...of array, (...of, ...))
 *
 */
const flatten = (sourceArr, targetArr) => {
    // initialize return array
    if(!targetArr){
        targetArr = [];
    }

    for(let i = 0; i < sourceArr.length; i++){
        if(isArray(sourceArr[i])){
            flatten(sourceArr[i], targetArr);
        }else{
            targetArr.push(sourceArr[i]);
        }
    }

    return targetArr;
}

module.exports = flatten;

/**
 * Private function to check if provided input `isArray`
 * -- could be moved in separate file
 */
const isArray = (sourceArr) => {
    return Object.prototype.toString.call(sourceArr) === "[object Array]";
}