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

    /**
     * async await捕捉错误:
async await中.then(..)不用写了，那么.catch(..)也不用写，
可以直接用标准的try catch语法捕捉错误。
async function getDate() {
 console.log('开始')
 try {
  let result1 = await ajaxGet('data1.json'); // 执行到这里报错，直接跳至下面 catch() 语句
  let result2 = await ajaxGet(result1.url);
  let result3 = await ajaxGet(result2.url);
  console.log('result1 ---> ', result1);
  console.log('result2 ---> ', result2);
  console.log('result3 ---> ', result3);
 
 } catch(err) {
  console.log(err) // ReferenceError: url111 is not defined
 }
};
 
     */