const read = require('fs')
function weRead(path) {
    return new Promise((resolve, reject) => {
        read.readFile(path, (err, data) => {
            if(err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

let p1 = weRead('./a.json')
let p2 = weRead('./b.txt')
let p3 = weRead('./c.txt')

Promise.race([p1,p2,p3])
.then(res => {
  
    console.log(res.toString())
}, err => {
    console.log(err.toString())
})
.catch( data =>{
    console.log('data')
    console.log(data)
})