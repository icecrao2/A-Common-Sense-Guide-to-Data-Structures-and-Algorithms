

function binarySearch(orderedArray, searchValue) {

    var upperBound = orderedArray.length - 1;
    var underBound = 0;
    

    while(upperBound >= underBound) {
        
        var midPoint = parseInt((upperBound + underBound) / 2);

        if(orderedArray[midPoint] == searchValue) {
            return midPoint;        
        } else if(orderedArray[midPoint] < searchValue) {
            underBound = midPoint + 1;
        } else if(orderedArray[midPoint] > searchValue) {
            upperBound = midPoint - 1;
        }
    }
    return null;
}

var nullValue = binarySearch([0,1,4,5,7,10], 6);
var index = binarySearch([0,1,4,5,7,10], 5);

console.log('nullValue = ' + nullValue);
console.log('index = ' + index);
