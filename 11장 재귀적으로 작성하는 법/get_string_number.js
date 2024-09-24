

function getStringNumber(array) {

    if(array.length == 1) {
        return array[0].length;
    }

    return array[0].length + getStringNumber(array.slice(1, array.length));
}


var result = getStringNumber(["afe", "fef", "d", "gef"]);
console.log(result);