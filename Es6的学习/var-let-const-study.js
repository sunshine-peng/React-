/*变量的提升*/
// var a
// a=1
// console.log(a) //a=1
// a=1
// var a
// console.log(a)//a=1

/** 不用关键字var声明的变量,它被解析成全局变量，在全局范围可见
 * 使用var关键字声明的变量，如果是在函数体内声明的，则为局部变量，如果在函数外
 * 声明的，则为全局变量
 */

// function b() {
//     a = 1
//     var c=2
// }
// b()
// console.log(a)//1
// console.log(c)// c is not defined

/**
 * 使用函数声明的函数具有变量提升相同的性质
 * 使用函数表达式声明的函数不具有变量提升的性质
 */
// d(2)

// function d(arg) {
//     console.log(arg) //arg=2
// }
// //  e(3)//e is not a function
// var e = function (arg) {
//     console.log(arg)
// }
// e(3) //e = 3

/**
 * 循环中，var声明的变量是全局变量，for循环几次就创建了几个异步函数，当异步函数
 * 执行完成后，for循环早已结束，全部输出同一个值。
 * 
 * 循环中，let声明的变量属于块级作用域，变量属于局部变量，循环几次就创建几个块级作用域
 * 当异步函数执行结束后，输出的都是块级作用域的变量。
 */
// function f(){
//     for(let i=0;i<10;i++){
//     setTimeout(()=>{

//             console.log(i)//i=1~10


//     },1000)
// }
// }
// f()
// function f(){
//     for(var i=0;i<10;i++){
//     setTimeout(()=>{

//             console.log(i)


//     },1000)
// }
// }
// f()

/**let声明的变量不能被重复声明，var的可以 
 * let的是块级作用域，相当于函数作用域
*/
// let a=1
// var a=1
// console.log(a)//Identifier 'a' has already been declared
// var a = 1
// var a = 1
// console.log(a) //a=1

// let a=1
// a=3
// console.log(a) //a=3
// let a=1
// var b=1
// if(true){
//     let a=2
//     var b=7
//     let c=3
//     var d=4
//     console.log(a)//a= 2
//     console.log(b)//b = 7
//     console.log(c)// c = 3
//     console.log(d)// d = 4
   
// }
// console.log(a)// a=1
// console.log(b)// b=7
// console.log(d)// d=4
// console.log(c)// c is not defined

/**
 * const 只可以声明一次，作为常量
 * const 声明的不是绝对不可更改，当声明的是一个对象或者是数组时，
 * 可以改变对象或者数组的值
 * const 如果想声明的对象不可更改，可以使用Object.freeze方法冻结对象
 * 但如果对象里面还嵌套了对象，则依旧可以修改对象的值
 * 
 */

// const a=1
// a=2
// console.log(a)//Assignment to constant variable.

// const obj={
//     name:'李四'
// }

// obj.name='55'
// console.log(obj)//{ name: '55' }
// const obj={
//     age:25
// }
// Object.freeze(obj)
// obj.age=26
// console.log(obj)//{ age: 25 }
const obj={
    age:{
        a:9
    }
}
Object.freeze(obj)
obj.age.a=26
console.log(obj)//{ age: { a: 26 } }