
function foo() {
    setTimeout(() => {
        console.log(88)
    },2000)
    console.log(1)
    console.log(2)
    return 'foo'
}

function* test() {
    console.log('start')
    let a = yield foo() //返回一个foo,不会等定时器执行完后才往下执行
    console.log('mid')
    let b= yield 1
    console.log('end')

}

// console.log(test())
// let g = test()
// console.log(g.next())
// //插入任务
// foo()
// //foo执行完在启动下一步
// //a的值可以通过next方法传递
// //next传递的参数：就是上一个yield的返回值
// console.log(g.next('A VALUE'))
// console.log(g.next('B VALUE'))
//generate内部相比普通函数而言，是可以被禁止的
//相比普通函数而言，调用的时候是通过一步步的next来调用的

function generateAutoRun(gen) {
    var g = gen()
    function next(value){
        var res = g.next(value)
        if(res.done) {
            return true
        }
        next(res.value)
    }
    next()
}

generateAutoRun(test)
