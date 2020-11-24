import React, { Component } from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '这是列表页面'
        }
    }
    render() { 
        return (
            <h3 style={{'color':'green'}}>{this.state.text}</h3>
        );
    }
}
 
export default List;