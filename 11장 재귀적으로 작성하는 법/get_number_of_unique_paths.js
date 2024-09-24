

function getNumberOfUniquePaths(row, column) {

    if(row == 2  && column == 2) {
        return 2;
    } else if(row == 1 || column == 1) {
        return 1;
    }

    return getNumberOfUniquePaths(row - 1, column) + getNumberOfUniquePaths(row, column - 1);
}

var result = getNumberOfUniquePaths(3,3);
console.log(result);