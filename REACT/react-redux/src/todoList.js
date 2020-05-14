import React, { Component } from 'react';
// import store from './store'
import {connect} from 'react-redux'
class TodoList extends Component {

   


    render() {
        return (
            <div>
                <div>
                <input value={this.props.inputValue} onChange={this.props.changeInputValue}/>
                <button>提交</button>
            </div>
            <ul>

            </ul>
            </div>
        );
    }
}

const mapStateToProps = ( state ) => {
return {
    inputValue: state.inputValue
}
} 


//把store.patch映射到props上
const mapDispatchToProps = (dispatch) =>{
    return {
        changeInputValue (e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch ( action )
        }
    }
}
//connect是连接
//todoList 和 store 做连接
//mapStateToProps 的参数就是store 该方法会帮助我们把store映射到props
export default connect(mapStateToProps, mapDispatchToProps) (TodoList);