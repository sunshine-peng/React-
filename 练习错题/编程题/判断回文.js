
// var str='bacdcab'
// function huiwen(str){
//     var arr=Array.from(str)
//     var result=arr.reverse()
//     var ss=result.join('')
//     if(ss==str){
//        console.log('是回文数')
//     }else{
//         console.log('不是回文')
//     }
// }
// huiwen(str)

// var num=123321
// function numHuiWen(num){
// var num=num.toString()
// var arr=Array.from(num)
// var result=arr.reverse()
// var str=result.join('')
// if(str==num){
//     console.log('我是数字的回文')
// }else{
//     console.log('我不是数字回文')
// }
// }
// numHuiWen(num)
// console.log(typeof 123)
function huiwen(arg){
    if(typeof(arg)=='number'){
        var num=arg.toString()
        var arr=Array.from(num)
        var result=arr.reverse()
        var str=result.join('')
    }else{
        var arr=Array.from(arg)
        var result=arr.reverse()
        var str=result.join('')
    }
    if(str==arg){
            console.log('我是回文')
        }else{
            console.log('我不是回文')
        }
}

huiwen('abccba')