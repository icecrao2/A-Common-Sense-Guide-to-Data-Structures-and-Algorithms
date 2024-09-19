

function insertSort(array) {

    for(var standardIdx = 1; standardIdx < array.length; standardIdx++) {

        var tempData = array[standardIdx];

        for(var idx = (standardIdx - 1); idx >= 0; idx--) {

            if(tempData < array[idx]) {
                array[idx + 1] = array[idx];
            } else if(tempData >= array[idx] && (idx + 1) != standardIdx){
                array[idx + 1] = tempData;
                break;
            }
        }
    }

    return array;
}

var result = insertSort([2,5,3,5,7,2,24,5,4,6,4,3,6,5,7,5,53,]);
console.log(result);