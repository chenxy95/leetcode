/**
 * 每位平方和的结果再平方和，一直循环，如果为1，则为快乐数
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    const set = new Set();
    n = getSum(n);
    while(n!==1 && !set.has(n)) {
        set.add(n);
        n = getSum(n);
    }
    return n === 1;
};

var getSum = function(n) {
    let sum = 0;
    while(n) {
        sum += (n % 10) ** 2;
        n = Math.floor(n / 10);
    }
    return sum;
}