

function hasDuplicateValue(array) {

    var existingNumbers = [];

    for(idx in array) {
        if(existingNumbers[array[idx]] != true) {
            existingNumbers[array[idx]] = true;
        } else if(existingNumbers[array[idx]] == true){
            return true;
        }
    }

    return false;
}

var result1 = hasDuplicateValue([1,2,3,4,5,6,7,8]);
var result2 = hasDuplicateValue([1,4,3,4,5,6,7,1]);

console.log(result1);
console.log(result2);