import React, { Component } from 'react';

class Parent extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '阿里'
        }
    }
    render() {
        return (
            <div>
                <p>父组件的name：{this.state.name}</p>
                <Child name='奋斗'></Child>
            </div>
        );
    }
}



class Child extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <p>父组件传过来的name：{this.props.name}</p>
                
            </div>
        );
    }
}

export default Parent;