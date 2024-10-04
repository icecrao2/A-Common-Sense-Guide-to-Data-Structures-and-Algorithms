

function findMaxNumberByN2(array, max = 0) {
    if(array.length == 1) { return array[0]; }

    var maxNumberSubProblem = findMaxNumberByN2(array.slice(1), max);

    if(array[0] > maxNumberSubProblem) {
        return array[0];
    } else {
        return maxNumberSubProblem;
    }
}

var result1 = findMaxNumberByN2([1,3,5,2,3,4]);
console.log(result1);

function findMaxNumberByNLogN(array) {

}

function findMaxNumberByN2(array) {

}