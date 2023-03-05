/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var i = 0

var addTwoNumbers = function (l1, l2) {
    var DecodeResult1 = decodeListNode(l1, [])
    var DecodeResult2 = decodeListNode(l2, [])
    var Result=[]
    for(var n=0;n<(DecodeResult1.length>=DecodeResult2.length?DecodeResult1.length:DecodeResult2.length);n++){
        sum=(DecodeResult1[n]==null?0:DecodeResult1[n])+(DecodeResult2[n]==null?0:DecodeResult2[n])
        if(sum>=10){
            sum=sum%10
            DecodeResult1[n+1]==null?DecodeResult1[n+1]=1:DecodeResult1[n+1]+=1
        }
        Result[n]=sum
    }
    i=Result.length
    return generateListNode(Result)
};
function decodeListNode(listnode, sum) {
    if (listnode != null) {
        sum.push(listnode.val)
        return decodeListNode(listnode.next, sum)
    } else return sum

}
function generateListNode(Array, listnode) {

    if (i!=0) {
        i--
        return generateListNode(Array, new ListNode(Array[i], listnode))
    }
    else
        return listnode

}
// @lc code=end

