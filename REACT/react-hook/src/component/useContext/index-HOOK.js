//useContent让父子组件传值变得更加简单
import React, { useState, createContext, useContext } from 'react';
const CountContext = createContext()
function Example() {
    const [count, setCount] = useState(0)
    return (
        <div style={{width:'100px',height:'200px',margin:'100px auto'}}>
            <p>{count}</p>
            <button onClick={() => {setCount(count + 1)}}>点击</button>
            <CountContext.Provider value={count}>
            <Count />
            </CountContext.Provider>
            
        </div>
    )
}

function Count() {
    const count = useContext(CountContext)
    return(
    <h2>{count}</h2>
    )
}
export default Example;