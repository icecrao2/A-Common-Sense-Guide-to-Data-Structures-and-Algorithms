

function getMaxProductOfThree(array) {

    var sortedArray = array.sort((prev, next) => prev - next);

    console.log(sortedArray);

    return sortedArray[sortedArray.length - 1] * sortedArray[sortedArray.length - 2] * sortedArray[sortedArray.length - 3];    
}

var result = getMaxProductOfThree([4,3,5,3,3,3,5,10,11,12,1,2,6,2]);
console.log(result);