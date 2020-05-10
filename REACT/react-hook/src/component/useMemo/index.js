//useMemo(useCallback)用来优化React Hooks 程序的性能0


import React, { useState, useMemo } from 'react'

function Example () {
    const [al, setAl] = useState('阿里发展中')
    const [pq, setPq] = useState('我在奋斗中')

    return (
        <>
        <button onClick={() => {setAl(new Date().getTime())}}>阿里</button>
        <button onClick={() => {setPq(new Date().getTime()+'我会成功')}}>我</button>
    <ChildComponent name={pq}>{al}</ChildComponent>
            </>
    )
}

function ChildComponent ({name, children}) {
function changeAl (name) {
    console.log('他来了，他来了，阿里向我走来了')
    return name + '阿里向我走来了'
}
const actionAl = useMemo(() => changeAl(name), [name])
return (
    <>
    <div></div>
<div>{children}</div>
<div>{actionAl}</div>
    </>
)
}



export default Example
