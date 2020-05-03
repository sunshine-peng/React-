//入口
import React from 'react'
import ReactDOM from 'react-dom'
import LifeCycle from './component/LifeCycle'
import ComponentVs from './component/ComponentVs'
import PureComponentTest from './component/PureComponentTest'
import ContextSample from './component/ContextSample'
import HooksTest from './component/HooksTest'

// import App from './App'
// class Counter extends React.Component {
//     constructor(props){
//         super(props)
//         this.state={
//             num:1
//         }
       
//         this.handleClick=this.handleClick.bind(this)
//     }
//     handleClick(){
//         this.setState({
//             num:this.state.num+1
//         })
//     }
//     render(){
//         return <div>
//                  <span>{this.state.num}</span>
//                  <button onClick={this.handleClick} >click</button>
//                </div>
//     }
// }

// ReactDOM.render(<Counter />,document.querySelector('#root'))

// class TodoList extends React.Component {
//     constructor(props){
//         super(props)
//         this.state={
//             text:'帅气的旺财',
//             list:['learn react','learn vue','learn anguals']
//         }

//         this.handleChange=this.handleChange.bind(this)
//         this.handleClick=this.handleClick.bind(this)

//     }

//     handleChange(e){
//         console.log(e.target.value)
//         this.setState({
//             text:e.target.value
//         })
//     }
//     handleClick(){
//         if(this.state.text){
//             this.setState(state =>({
//               list:[...state.list,state.text],
//               text:''
//             }))
//         }
       
//     }
// render(){
//     return (<div>
//              <h3>{this.state.text}</h3>
//              <input type='type' value={this.state.text} onChange={this.handleChange}></input>
//              <button onClick={this.handleClick}>add</button>
//              <ul>
//                  {this.state.list.map(v => {
//                      return <li key={v}>{v}</li>
//                  })}
//              </ul>
//            </div>
//     )
// }  
// }

  /**
   * react16新增
   * 1、render函数支持返回数组和字符串
   * 2、异常处理，添加componentDidCatch(函数)获取组件错误
   */
  class Rect16 extends React.Component{
      constructor(props){
          super(props)
          this.state={
              hasError:false
          }
      }
      render(){
          return (
              <div>
                  {this.state.hasError?<div>出错了</div>:null}
                  <ClickWriteError />
                  <FeatureReturnfFraments />
              </div>
          )
      }
  }

  class ClickWriteError extends React.Component{
      constructor(props){
          super(props)
          this.state={
              error:false
          }
          this.handleClick=this.handleClick.bind(this)
      }

      handleClick(){
          this.setState({
              error:true
          })
      }
      
      render(){
          if(this.state.error){
              throw new Error('出错误了')
          }
          return <button onClick={this.handleClick}>抛出错误</button>
      }
  }

  class FeatureReturnfFraments extends React.Component{
      constructor(props){
          super(props)

      }

      render(){
          return[
              <p key='key1'>React 很不错</p>,
              '文本1',
              <p key='key2'>Vue 很不错</p>,
              '文本2'
          ]
      }
  }

// ReactDOM.render(<ContextSample />,document.querySelector('#root'))
ReactDOM.render(<HooksTest />,document.querySelector('#root'))
