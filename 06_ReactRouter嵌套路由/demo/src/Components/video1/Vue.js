import React, { Component } from 'react'

class ReactPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            main_body: '我是 Vue 页面'
        }
    }
    render(){
        return (
        <h3>{this.state.main_body}</h3>
        )
    }
}

export default ReactPage