import { INIT_LIST_ACTION,CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'
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