/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    var result = ""
    for (var char of s.trim()) {
        if (!isFinite(parseInt(char)) && char != '-' && char != '+')
            break
        if ((char == '-' || char == '+') && (result.includes('+') || result.includes('-')))
            break
        result += char
    }
    result = ((result == ""||result=='-'||result=='+') ? 0 : result)
    if (parseInt(result) < Math.pow(-2, 31))
        result = Math.pow(-2, 31)
    else if (parseInt(result) > Math.pow(2, 31) - 1)
        result = Math.pow(2, 31) - 1
    return parseInt(result)
};
// @lc code=end

