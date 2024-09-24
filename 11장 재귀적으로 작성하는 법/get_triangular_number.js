

function getTrianglularNumber(number) {

    if(number == 1) {
        return 1;
    }


    return getTrianglularNumber(number - 1) + number;
}

var result = getTrianglularNumber(3);
console.log(result);