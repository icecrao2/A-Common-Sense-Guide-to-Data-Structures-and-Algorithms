

function linearSearch(orderedArray, searchValue) {

    for(let idx in orderedArray) {
        if(orderedArray[idx] == searchValue) {
            return idx;
        } else if(orderedArray[idx] > searchValue) {
            return null;
        } 
    }
    return null;
}

var nullValue = linearSearch([0,1,4,5,7,10], 6);
var index = linearSearch([0,1,4,5,7,10], 5);

console.log('nullValue = ' + nullValue);
console.log('index = ' + index);
