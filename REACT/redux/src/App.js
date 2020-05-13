import React,{Component} from 'react';
import {Input, Button, List} from 'antd'
import 'antd/dist//antd.css'
import store from './store/index'
import { ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM} from './store/actionTypes'
import Form from 'antd/lib/form/Form';
import { getInputChange, addTodoItem, deleteTodoItem } from './store/actionCreator'
// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];

//store的创建
class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()
    console.log(store.getState())
    this.handleInputChange = this.handleInputChange.bind ( this )
    this.handleStoreChange = this.handleStoreChange.bind ( this )
    this.handleBtnClick = this.handleBtnClick.bind ( this )
   
    store.subscribe ( this.handleStoreChange )
  }

   handleBtnClick () {
    // const action = {
    //   type: ADD_TODO_ITEM,
    //   value: this.state.inputValue
    // }
    const action = addTodoItem ( this.state.inputValue )
    store.dispatch ( action )
  }

   handleInputChange (e) {
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    const action = getInputChange ( e.target.value )
    store.dispatch( action )  //让管理员听到这句话
   }

   handleStoreChange () {
     console.log( 'store changed' );
     this.setState ( 
       store.getState()
      )
     
   }

   handleItemDelete (index) {
    //  let action = {
    //    type: 'delete_todo_item',
    //    index
    //  }

    const action = deleteTodoItem ( index )
     store.dispatch ( action )
   }
  render() {
    return (
      <div style={{marginLeft:'10px',marginTop:'10px'}}>
     <div>  
    <Input 
     value={this.state.inputValue} 
     placeholder='Todo info' 
     style={{width:'300px'}}
     onChange={this.handleInputChange}/>
        <Button 
        type='primary'
        onClick={this.handleBtnClick} 
        >提交</Button></div>
        <List
      
      bordered
      style={{marginTop:'10px',width:'300px'}}
      dataSource={this.state.list}
      renderItem={(item, index) => (
        <List.Item onClick={this.handleItemDelete.bind(this,index)}>
          {item}
        </List.Item>
      )}
    />
      </div>
    )
  }
}
export default TodoList;
