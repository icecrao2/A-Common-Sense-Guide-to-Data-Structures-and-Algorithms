

class Stack {
    constructor() {
        this._arr = [];
    }   
    push(item) {
        this._arr.push(item);
    }
    pop() {
        return this._arr.pop();
    }
    peek() {
        return this._arr[this._arr.length - 1];
    }
}

function getReverse(array) {

    var stack = new Stack();
    var result = new Array();

    for (data of array) {
        stack.push(data);
    }

    for (data in array) {
        result.push(stack.pop());
    }

    return result;
}

var result = getReverse([1,2,5,2]);
console.log(result);