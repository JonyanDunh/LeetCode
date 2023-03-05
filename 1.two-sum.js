/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    for(var i=0;i<nums.length;i++){
        for(var n=i+1;n<nums.length;n++){
            if(nums[i]+nums[n]==target)
                return [i,n]
        }
    }
};
// @lc code=end

