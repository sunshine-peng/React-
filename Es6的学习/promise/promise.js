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

p1.then(res => {
    cs =sf
    console.log(res.toString())
    return p2
}, err => {
    console.log(err)
    return p2
})
.catch(err => {
    console.log('aaa')
    console.log(err)
}) 
.then(res => {
    console.log(res.toString())
    return p3
}, err => {
    console.log('444')
    console.log(err)
    return p3
})
.then(res => {
    console.log(res.toString())
   
}, err => {
    console.log(err)
    
})
.catch(err => {
    console.log('aaa')
    console.log(err)
}) 