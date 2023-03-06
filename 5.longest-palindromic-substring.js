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
var longestPalindrome = function(s) {
    var MaxString=""
    var TmpString = s[0]
    for (var index = 1; index <= s.length;) {
        if (ReversedString.indexOf(TmpString) != -1) {
            MaxString=((TmpString.length >= MaxString.length) ? TmpString : MaxString)
            TmpString+=s[index]
            index++
        }
        else
        {
            TmpString = TmpString.substring(1);
        }
        // console.log("The max string:",MaxString)
    }
    // MaxString=MaxString==""?TmpString:MaxString
    return MaxString
};
function reverseArray(Array){
    return Array.split('').reverse().join('');
}
// @lc code=end

