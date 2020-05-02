import React,{Component} from 'react'
import ReactDOM from 'react-dom'

 class LifeCycle extends Component {
    constructor(props){
        super(props)
        console.log('constructor调用')
        this.state={
            name:'张啬庵'
        }
    }

componentWillMount(){
    //此时可以访问属性和状态，可以api的调用，但没法做DOM的操作
    console.log('1.componentWillMount被调用');
    
}

componentDidMount(){
    //渲染已经完成，可以进行状态更新操作
    console.log('2.componentDidMount被调用了');
    
}

componentWillReceiveProps(){
    //父组件传递的属性有变化，做相应的操作
    console.log('3.componentWillReceiveProps被调用了');

}

shouldComponentUpdate(){
    //组件是否要更新，返回布尔值
    console.log('4.shouldComponentUpdate被调用了');
    return true

}

componentWillUpdate(){
    //组件更新前
    console.log('5.componentWillUpdate被调用了');

}
componentDidUpdate(){
    //组件更新已经完成
    console.log('6.componentDidUpdate被调用了');

}
render(){
    console.log('render被调用了')
    return (
    <div>
        {this.state.name}
    </div>
    )
}
}

export default class Test extends Component{
    constructor(props){
        super(props)
        this.state={
            hasName:'辣鸡'
        }
        setTimeout(() => {
            this.setState({
                hasName:'奔雷'
            })
        }, 2000);
    }
    

    render(){
        return (
            <LifeCycle prop={this.state.hasName} ></LifeCycle>
        )
    }
}

