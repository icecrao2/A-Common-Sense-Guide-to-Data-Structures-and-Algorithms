

function findAllNumbers(array) {

    for (data of array) {
        if(Number.isInteger(data)) {
            console.log(data);
        } else if(Array.isArray(data)) {
            findAllNumbers(data);
        }
    }
}

findAllNumbers([
    1,4,3,5,
    [2,4,24,23],
    2,5,
    2,5,6,
    [
        2,5,7,3,5,2,
        [1,22,33,4,44],
        [
            [199,555],
            [123,234,424]
        ]
    ]
]);