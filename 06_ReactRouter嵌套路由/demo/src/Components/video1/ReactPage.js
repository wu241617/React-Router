import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class ReactPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            main_body: '我是 ReactPage 页面'
        }
    }
    render(){
        return (
        <div>
            <Redirect to="/video/reactpage/" />    
            <h3>{this.state.main_body}</h3>
        </div>
        )
    }
}

export default ReactPage