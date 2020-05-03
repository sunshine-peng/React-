import React,{useState, useEffect} from 'react'

export default function HooksTest (){
//useState(initialState)接收初始状态，返回一个状态变量和更新函数
//声明一个新的叫做 "count" 的 state 变量
    const [count, setCount] = useState(0)
    //数据获取，设置订阅，以及手动更改React组件中的DOM --副作用
    useEffect(() => {
        document.title = `您点击了${count}次`
    })
    return (
        <div>
            <p>you click {count} times</p>
            {/**调用setCount,改变count变量 */}
            <button onClick={() => setCount(count + 1)}>click me</button>
        </div>
    )
}