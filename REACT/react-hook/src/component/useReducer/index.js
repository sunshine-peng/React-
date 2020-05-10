// function countReducer(state, action) {
//     switch (action) {
//         case 'add' :
//             return state + 1;
//             case 'sub': 
//             return state - 1;
//             default:
//                 return state
//     }
// }
//useReducer 帮助我们整合组件中同一状态的方法
import React, { useReducer } from 'react'

function ReducerDemo () {
    // const count = 0
    // function add() { count++ }
    // function cut() { count-- }
    const [count,dispatch ] = useReducer((state, action) => {
        switch (action) {
                    case 'add' :
                        return state + 1;
                        case 'sub': 
                        return state - 1;
                        default:
                            return state
                }
    },0)
    return (
        <div>
            <h2>现在的分数是{count}
                <button onClick={() => dispatch('add')}> add</button>
                <button onClick={() => dispatch('sub')}> cut</button>
            </h2>
        </div>
    )
}


export default ReducerDemo