

function bubbleSort(array) {

    var unSortedLastIndex = array.length;
    var isSorted = false;

    while(!isSorted) {
        isSorted = true;
        for(var idx = 1; idx < unSortedLastIndex; idx++) {
            if(array[idx - 1] > array[idx]) {
                isSorted = false;

                var temp = array[idx - 1];
                array[idx - 1] = array[idx];
                array[idx] = temp;
            }
        }
        unSortedLastIndex--;
    }

    return array;
}


var result = bubbleSort([9,8,7,6,5,4,3,2,1]);
console.log(result);