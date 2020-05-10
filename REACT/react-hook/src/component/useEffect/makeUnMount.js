import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Example () {
    const [count,setCount] = useState(0)
//副作用== hooks模式状态下，(state) 发生变更的时候提供给我们做额外的操作的地方
    useEffect(() => {
        console.log(`您点击了${count}次`)
    })
    return (
        <div style={{width:'100px',height:'200px',margin:'100px auto'}}>
            <p>{count}</p>
            <button onClick={() => {setCount(count + 1)}}>点击</button>
            
            
           <Router>
           <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/index1'>奋斗</Link></li>
            </ul>
           <Route exact path='/' component={Index}></Route>
            <Route path='/index1' component={Index1}></Route>
           </Router>
         

        </div>
    )
}

function Index () {
    useEffect(() => {
        console.log('你进来了Index页面')
        return () => {
            console.log('您离开了Index页面')
        }
    },[])
    return (
        <h1>目标进阿里</h1>
    )
}
function Index1 () {
    useEffect(() => {
        console.log('你进来了Index1页面')
        return () => {
            console.log('您离开了Index1页面')
        }
    })
    return (
        <h1>坚持学习知识</h1>
    )
}

export default Example

//1. React首次渲染和之后的每一次渲染都会调用useEffect
//2. useEffect 里面定义的函数是异步执行的，他不会阻碍浏览器的更新视图
