import React,{Component} from 'react';
import 'antd/dist//antd.css'
import store from './store/index'
import TodoListUI from './TodoListUI'
// import Form from 'antd/lib/form/Form';
import { getInputChange, getInitList, initListAction, addTodoItem, deleteTodoItem } from './store/actionCreator'
import axios from 'axios'
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
    this.handleItemDelete = this.handleItemDelete.bind ( this )
   
    store.subscribe ( this.handleStoreChange )
  }

componentDidMount () {
  const action = getInitList ()
  store.dispatch ( action )
  console.log( action );
  
    // axios.get ( 'http://api.github.com/users/octocat/gists').then ( (res) => {
    // const data = res.data
    // const action = initListAction ( Object.keys(data[0].owner) )
    // store.dispatch ( action )

    // })
    

  //  const action = getTodoList ()
  //  store.dispatch ( action )//因为此刻的store已经集成的thunk的功能，所以支持dispatch的一个函数，合格函数会自动执行

  // axios.get ( 'http://musicapi.leanapp.cn/comment/music?id=186016&limit=1').then ( (res) => {
  //           const data = res.data
  //           const action = initListAction ( Object.keys(data.hotComments[0]) )
  //           store.dispatch ( action )
  //           console.log(action)
  //           // dispatch ( action )
        
  //           })  
  //  console.log(action);
   
}

   handleBtnClick () {
    // const action = {
    //   type: ADD_TODO_ITEM,
    //   value: this.state.inputValue
    // }
    console.log('index')
    const action = addTodoItem ( this.state.inputValue )
    console.log('index', action)

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
    console.log(index)

    const action = deleteTodoItem ( index )
     store.dispatch ( action )
   }
  render() {
    return (
    <TodoListUI 
    inputValue={this.state.inputValue}
    handleInputChange={this.handleInputChange}
    handleBtnClick={this.handleBtnClick}
    List={this.state.list}
    handleItemDelete={this.handleItemDelete}
    />
    )
  }
}
export default TodoList;
