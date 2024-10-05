

function findMaxNumberByN(array, max = 0) {

    console.log('n');

    if(array.length == 1) { return array[0]; }

    var maxNumberSubProblem = findMaxNumberByN(array.slice(1), max);

    if(array[0] > maxNumberSubProblem) {
        return array[0];
    } else {
        return maxNumberSubProblem;
    }
}

var result1 = findMaxNumberByN([1,3,5,2,3,4]);
console.log(result1);

function findMaxNumberByNLogN(array) {
    
    var sortedArray = array.sort((prev, next) => prev - next);

    return sortedArray[sortedArray.length - 1];
}

var result2 = findMaxNumberByNLogN([1,3,5,2,3,4]);
console.log(result2);


function findMaxNumberByN2(array) {

    var max = 0;

    for(idx in array) {
        max = array[idx];
        var isMax = true;
        for(var i = idx; i < array.length; i++) {
            if(max < array[i]) {
                isMax = false;
            }
        }

        if(isMax) {
            return max;
        }
    }
}

var result3 = findMaxNumberByN2([1,3,5,2,3,4]);
console.log(result3);