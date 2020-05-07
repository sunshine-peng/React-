let p = Promise.resolve(1)
let p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(234)
    },2000)
})

function* test() {
    let a = yield p
    console.log(a)
    let b = yield p1
    console.log(b)

}
    //1、执行generate方法；2、保证顺序
    function asyncTogenerate(gen) {
        let g = gen()
        function step(value) {
            let res = g.next(value)
            if(res.done) {

            } else {
                //把yield后面的东西直接(res.value) 直接resolve
                Promise.resolve().then((res) => {
                    //下一个yleld
                    //下一个递归
                   step(res)
                })
            }
        }
    }

    asyncTogenerate(test)