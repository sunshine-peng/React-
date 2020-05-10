import React, {useState} from 'react'

function Example2 () {
    const [age, setAge] = useState(18)
    const [name, setName] = useState('张珊')
    const [work, SetWork] = useState('前端工程师')
/**
 * react 是如何保证useState找到对应的state
 * react 是根据useState出现的顺序确定的
 * react HOOKs 不能出现在条件判断语句中，因为他必须有完全一样的渲染顺序
 */

    return (
        <div>
            <p>{name}今年：{age}</p>
            <p>{work}</p>
        </div>
    )
}


export default Example2
