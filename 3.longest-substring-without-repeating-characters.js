/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var max=0
    var Array = []
    for (var index = 0; index < s.length;) {
        if (!Array.includes(s[index])) {
            Array.push(s[index])
            index++
        }
        else
            Array.shift()
        max = ((Array.length >= max) ? Array.length : max)
    }
    return max
};
// @lc code=end

