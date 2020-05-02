
/**
 * toString()函数的作用是返回object的字符串表示
 * 基本上，javascript中所有数据类型都拥有valueOf和toString这两个方法，null除外。
 */
let arr=[10,20,'a']
let result=arr.toString()
console.log(result)//10,20,a

let obj={
    a:'dss',
    name:"李四",
    age:27

}
let objRes=obj.toString()
console.log(objRes)//[object Object] JavaScript中object默认的toString()方法返回字符串”[object Object]“

let date=new Date()
let dateRes=date.toString()
console.log(dateRes)//Tue Mar 24 2020 19:18:17 GMT+0800 (GMT+08:00)
console.log(date)//2020-03-24T11:18:17.066Z

console.log(typeof dateRes) //string

let fun=(function(d){
    console.log(d)
}).toString()
console.log(fun)
/**
 * function(d){
    console.log(d)
}
 */

 let a=1
 console.log(typeof a)//number
 console.log(typeof a.toString())//string

 var c=13
 var n=c.toString(2)
 console.log(n)