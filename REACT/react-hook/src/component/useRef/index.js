//useRef获取DOM元素
//

import React, { useRef } from 'react';

function Example () {
    //inputEl这个变量是Ref函数的返回值，那么这个变量给谁当Ref属性，就表示
    const inputEl = useRef(null)
    const onButtonClick = () => {
        console.log(inputEl);
        inputEl.current.value = '阿里牛逼'
        
    }
    return (
        <>
        <input ref={inputEl} type='text' />
        <button onClick={onButtonClick}>爱input上展示按钮</button>
        </>
    )
}



export default Example;