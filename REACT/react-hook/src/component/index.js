import React, { Component } from 'react';

class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.handleClick}>点击</button>
            </div>
        );
    }
}

export default index;