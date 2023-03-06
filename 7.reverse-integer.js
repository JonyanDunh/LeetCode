/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var index = 0;
var reverse = function (x) {
    if (x == 0)
        return 0
    var symbol = (x < 0 ? -1 : 1)
    x *= symbol
    for (; (10 ** index) <= (x); index++);
    var Array = decodeNumber(x)
    var sum = 0
    for (var i = 0; i < Array.length; i++) {
        sum += Array[i] * (10 ** i)
    }
    sum *= symbol
    if (sum < (-2) ** 31 || sum > (2) ** 31 - 1)
        return 0
    return sum
};
function decodeNumber(x, numbers = []) {
    index--
    if (index >= 0) {
        numbers.push(parseInt(x / (10 ** index)))
        decodeNumber(parseInt(x % (10 ** index)), numbers)
        return numbers
    }
}

// @lc code=end

