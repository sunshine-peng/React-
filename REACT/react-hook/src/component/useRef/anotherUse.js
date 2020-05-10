//useRef获取DOM元素
//

import React, { useRef, useState, useEffect  } from 'react';

function Example () {
    //inputEl这个变量是Ref函数的返回值，那么这个变量给谁当Ref属性，就表示
    const inputEl = useRef(null)
    const onButtonClick = () => {
        console.log(inputEl);
        inputEl.current.value = '阿里牛逼'
        
    }
    const [text, setText] = useState('阿里')
    const textRef = useRef()
    useEffect(() => {
        textRef.current = text
        console.log(textRef.current)
    })
    return (
        <>
        <input ref={inputEl} type='text' />
        <button onClick={onButtonClick}>爱input上展示按钮</button>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
        </>
    )
}



export default Example;