import React, { Component } from 'react';
class REACT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '这是 RAECT 页面'
        }
    }
    render() { 
        return (
            <h3>
                <span>{this.state.text}</span>
            </h3>
        );
    }
}
 
export default REACT;