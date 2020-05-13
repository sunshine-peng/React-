import React, { Component } from 'react';
import {Input, Button, List} from 'antd'
const TodoListUI =( props ) => {  //当一个组件只有render时，可以使用无状态组件
    return (
        <div style={{marginLeft:'10px',marginTop:'10px'}}>
       <div>  
      <Input 
       value={props.inputValue} 
       placeholder='Todo info' 
       style={{width:'300px'}}
       onChange={props.handleInputChange}/>
          <Button 
          type='primary'
          onClick={props.handleBtnClick} 
          >提交</Button></div>
          <List
        
        bordered
        style={{marginTop:'10px',width:'300px'}}
        dataSource={props.List}
        renderItem={(item, index) => (
          <List.Item onClick={( index ) => {
              props.handleItemDelete( index )
          }}>
            {item}
          </List.Item>
        )}
      />
        </div>
      )
}


export default TodoListUI;