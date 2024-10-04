

function golomb(n, memo = {}) {
    if(n == 1) { return 1; }

    if(memo[n] != null) {
        return memo[n];
    } else {
        memo[n] = 1 + golomb(n - golomb(golomb(n - 1, memo), memo), memo);
        return memo[n];
    }
}

var result = golomb(10);
console.log(result);