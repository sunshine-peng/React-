import { INIT_LIST_ACTION, GET_INIT_ACTTION, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'
import axios from 'axios'
import store from './index'
export const getInputChange = ( value ) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const addTodoItem = ( value ) => ({
    type: ADD_TODO_ITEM,
    value
})
export const deleteTodoItem = ( value ) => ({
    type: DELETE_TODO_ITEM,
    value
})
export const initListAction = ( data ) => ({
    type: INIT_LIST_ACTION,
    data
})
export const getInitList = ( ) => ({
    type: GET_INIT_ACTTION,
    
})
// export const getTodoList = () => {
//    return ( dispatch ) => {
//     axios.get ( 'http://musicapi.leanapp.cn/comment/music?id=186016&limit=1').then ( (res) => {
//         const data = res.data
//         const action = initListAction ( Object.keys(data.hotComments[0]) )
//         // store.dispatch ( action )
//         console.log(action)
//         dispatch ( action )
    
//         })  
//    }
// }