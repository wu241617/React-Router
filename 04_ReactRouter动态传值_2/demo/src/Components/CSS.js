import React, { Component } from 'react';
class CSS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '这是 CSS 页面'
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
 
export default CSS;