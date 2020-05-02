// let str='helloword.abc.hello.abc.hello'
// let reg=/abc/g
// let arr=str.match(reg)
// console.log(arr)//[ 'abc', 'abc' ]


// let str='helloword.abc.hello.abc.hello'
// let reg=/abc/
// let arr=str.match(reg)
// console.log(arr)
// console.log(reg.lastIndex)//0
// arr=str.match(reg)
// console.log(reg.lastIndex)//0
// /**
//  * [ 'abc',
//   index: 10,
//   input: 'helloword.abc.hello.abc.hello',
//   groups: undefined ]
//  */

// let str='helloword.abc.hello.abc.hello'
// let reg=/ab5/
// let arr=str.match(reg)
// console.log(arr)//null

// let str='helloword.abc.hello.abc.hello'
// let reg=/abc/
// let arr=str.match()
// console.log(arr)
/**
 * 不给参数返回空数组
 * [ '',
  index: 0,
  input: 'helloword.abc.hello.abc.hello',
  groups: undefined ]
 */
let str='helloword.abc.hello.abc.hello'
let reg=/abc/
let arr=str.match('hello')
console.log(arr)
/**
 * 。如果传入一个非正则表达式对象，则会隐式地使用 new RegExp(obj) 
 * 将其转换为一个 RegExp 。如果你没有给出任何参数并直接使用match() 方法 ，
 * 你将会得到一 个包含空字符串的 Array ：[""] 。
 * [ 'hello',
  index: 0,
  input: 'helloword.abc.hello.abc.hello',
  groups: undefined ]
 */
