import React, { Component } from 'react';
class JS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '这是 JS 页面'
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
 
export default JS;