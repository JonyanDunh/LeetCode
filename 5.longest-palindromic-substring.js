/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    var ReversedString = reverseArray(s)
    var MaxString = ""
    var TmpString = s[0]
    for (var index = 1; index <= s.length;) {
        if (ReversedString.includes(TmpString)) {
            MaxString = (TmpString.length >= MaxString.length) && TmpString == reverseArray(TmpString) ? TmpString : MaxString
            TmpString += s[index]
            index++
        }
        else
            TmpString = TmpString.substring(1);
    }
    return MaxString
};
function reverseArray(Array) {
    return Array.split('').reverse().join('');
}
// @lc code=end
