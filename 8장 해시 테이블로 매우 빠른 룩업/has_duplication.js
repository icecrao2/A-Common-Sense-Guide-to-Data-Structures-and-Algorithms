

function hasDuplication(array) {
    
    var hashTable = new Map();

    for(data of array) {
        if(hashTable.get(data) == true) {
            return data;
        } else {
            hashTable.set(data, true);
        }
    }
}

var result = hasDuplication(['a','b','c', 'd', 'e', 'c']);
console.log(result);