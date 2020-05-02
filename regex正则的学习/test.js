
// let str='hello world 2020'
// let reg=/hello/
// let blo=reg.test(str)
// console.log(blo)


// let str='helloworld2020'
// let reg=/^h[a-z0-9]*0$/
// let blo=reg.test(str)
// console.log(blo)

var str='123456'
var reg=/^[0-9]{4,10}$/
var blo=reg.test(str)
console.log(blo)
str='1234567'
blo=reg.test(str)
console.log(blo)



