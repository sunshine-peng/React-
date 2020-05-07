
let p = Promise.resolve(1)
let p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(234)
    },2000)
})

(async function() {
    //await后面接promise
    //接promise才能保证顺序

    let c = await p
    let d = await p1
    let f = await 789
    console.log(c)
})()
    
//怎么保证promise后面的代码才会执行
//都用promise.resolve包装一层不用判断await yield后面到底是promise（有then方法）
Promise.resolve(p).then(() => {
    Promise.resolve(p1).then(() => {
        Promise.resolve(789).then(() => {
            console.log(c)
        })
    })
})

