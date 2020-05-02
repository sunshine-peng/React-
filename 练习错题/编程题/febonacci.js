/**
 * 解题思路
 * 菲波那切数列 下一轮的结果是前两位的结果相加，
 * 当进行下一轮结果运算时，当前前一位结果的值(top)赋值给最前两位结果的值(bottom)
 * 而当前结果的值赋值给当前前一位结果的值（top），bottom和top的赋值顺序为bottom先赋值
 * 如果top先赋值，则会导致下一轮运算时top和bottom值相等。
 */
var top = 1,
    bottom = 0,
    result = 0

function febo(n) {

    for (var i = 0; i < n; i++) {

        result = bottom + top
        bottom = top
        top = result

    }

    return result
}


console.log(febo(5))