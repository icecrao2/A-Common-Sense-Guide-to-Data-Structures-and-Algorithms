

function uniquePath(rows, column, memo = {}) {
    if(rows == 1 || column == 1) {
        return 1;
    } 

    if(memo[[rows, column]] != null) {
        return memo[[rows, column]];
    } else {
        memo[[rows, column]] = uniquePath(rows - 1, column, memo) + uniquePath(rows, column - 1, memo);
        return memo[[rows, column]];
    }
}

var result = uniquePath(3, 3);
console.log(result);