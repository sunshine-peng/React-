let x = 0
async function test() {
  
    x += await 2
    console.log(x)
    // setTimeout(() => {
    //     x += 2
    //     console.log(x)
    // },200)
    
}
// async function test1(){
//     return 2
// }


test()
x += 1
console.log(x)