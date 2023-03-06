/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    var Array = []
    for (var row = 0; row < numRows; row++)
        Array[row] = []
    var reverse = false
    var row = 0
    for (var index = 0; index < s.length; index++) {
        Array[row].push(s[index])
        if (row < numRows && !reverse) {
            row++
            if(row==numRows-1){
                reverse=true
            }else if(row==numRows){
                row--
            }
        } else if (reverse) {
            row--
            if(row==0)
            reverse=false
            
        }

    }
    var Result = ""
    for (var row = 0; row < numRows; row++)
        for (var data of Array[row])
            Result += data
    return Result
};

// @lc code=end

