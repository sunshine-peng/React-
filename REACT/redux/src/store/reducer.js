
import { ADD_TODO_ITEM,INIT_LIST_ACTION, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM } from './actionTypes'
const defaultState = {
    inputValue: '212',
    list: [1, 2, 3]
}           //state是指上一次储存的数据
            //action用户传过来的那句话
            //纯函数是指，给定固定的输入，就一定会有固定的输出，而不会有副作用
export default (state = defaultState, action) => {
    let newState
    if ( action.type === CHANGE_INPUT_VALUE ) {
        newState = JSON.parse ( JSON.stringify ( state ))
        newState.inputValue = action.value
        return newState //reducer有一个限制，可以接受state,但绝不能修改state
    } else if ( action.type === ADD_TODO_ITEM ) {
        newState = JSON.parse ( JSON.stringify ( state ) )
  
        newState.list.push ( newState.inputValue )
        console.log( newState.list)
        newState.inputValue = ''
        return newState
    } else if (action.type === DELETE_TODO_ITEM ) {
        newState = JSON.parse ( JSON.stringify ( state ))
        console.log('dsa',action.value)
        newState.list.splice ( action.value, 1 )
        return newState
    } else if (action.type === 'init_list_action') {
        newState = JSON.parse ( JSON.stringify ( state ))
        newState.list = action.data 
        return newState
    }
        return state
}