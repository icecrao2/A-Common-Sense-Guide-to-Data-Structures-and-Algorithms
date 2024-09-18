

function selectionSort(array) {

    for(var underBoundIndex = 0; underBoundIndex < array.length - 1; underBoundIndex++) {
        var minDataIndex = underBoundIndex;
        var minData = array[minDataIndex];

        for(var idx = underBoundIndex + 1; idx < array.length; idx++ ) {
            if(array[idx] < minData) {
                minDataIndex = idx;
                minData = array[idx];
            }
        }

        if(underBoundIndex != minDataIndex) {
            var temp = array[underBoundIndex];
            array[underBoundIndex] = array[minDataIndex];
            array[minDataIndex] = temp;
        }
    }

    return array;
}


var result = selectionSort([2,5,3,6,8,3,6,8,5,3,2,0,1]);
console.log(result);