import React,{Component} from 'react';
import {Input, Button, List} from 'antd'
import 'antd/dist//antd.css'
import store from './store/index'
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
  }

  render() {
    return (
      <div style={{marginLeft:'10px',marginTop:'10px'}}>
     <div>   <Input value={this.state.inputValue} placeholder='Todo info' style={{width:'300px'}}/>
        <Button type='primary' >提交</Button></div>
        <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      style={{marginTop:'10px',width:'300px'}}
      dataSource={this.state.list}
      renderItem={item => (
        <List.Item>
          {item}
        </List.Item>
      )}
    />
      </div>
    )
  }
}
export default TodoList;
