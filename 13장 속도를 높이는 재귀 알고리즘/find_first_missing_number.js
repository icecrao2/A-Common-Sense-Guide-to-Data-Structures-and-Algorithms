

function findFirstMissingNumber(array) {

    var sortedArray = array.sort((prev, next) => prev - next);

    for(idx in sortedArray) {
        if(sortedArray[idx] != idx) {
            return idx;
        }
    }

    return null;
}

var result = findFirstMissingNumber([1,4,5,3,6,7,8,9,0]);
console.log(result);

