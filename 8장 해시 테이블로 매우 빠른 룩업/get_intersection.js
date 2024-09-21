

function getIntersection(array1, array2) {
    
    var hashTable = new Map();
    var largeArray = [];
    var smallArray = [];

    if(array1.length > array2.length) {
        largeArray = array1;
        smallArray = array2;
    } else {
        largeArray = array2;
        smallArray = array1;
    }

    for(data of largeArray) {
        hashTable.set(data, true);
    }

    return smallArray.filter(data => hashTable.get(data) == true);
}

var result = getIntersection([1,2,4,6,8,0], [1,2,3,5,6,9]);
console.log(result);