/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var sum=nums1.length+nums2.length
    var Array=nums1.concat(nums2);
    Array.sort(function(a, b){return a - b});
    return sum%2==0?(Array[sum/2-1]+Array[sum/2])/2:Array[(sum+1)/2-1]
};
// @lc code=end

