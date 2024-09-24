

function getEvenArray(array) {

    if(array.length == 1) {
        return  array[0] % 2 == 0 ? 1 : 0;
    }

    if(array[0] % 2 == 0) {
        return getEvenArray(array.slice(1, array.length)) + 1;
    } else {
        return getEvenArray(array.slice(1, array.length));
    }

}

var result = getEvenArray([2,4,2,45,3,5,3,5,6,34,2]);
console.log(result);