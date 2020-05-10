import React, {useState, useEffect} from 'react'

function Example () {
    const [count,setCount] = useState(0)
//副作用== hooks模式状态下，(state) 发生变更的时候提供给我们做额外的操作的地方
    useEffect(() => {
        console.log(`您点击了${count}次`)
    })
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => {setCount(count + 1)}}>点击</button>
        </div>
    )
}

export default Example

//1. React首次渲染和之后的每一次渲染都会调用useEffect
//2. useEffect 里面定义的函数是异步执行的，他不会阻碍浏览器的更新视图
