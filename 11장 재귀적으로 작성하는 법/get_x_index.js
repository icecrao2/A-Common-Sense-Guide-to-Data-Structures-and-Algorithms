

function getXIndex(text, number = 0) {

    if(text[0] == 'x') {
        return number;
    }

    return getXIndex(text.slice(1, text.length), number + 1);
}

var result = getXIndex('fewfwefwefx');
console.log(result);