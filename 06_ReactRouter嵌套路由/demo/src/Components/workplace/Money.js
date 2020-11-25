import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Money extends Component {
    constructor(props){
        super(props)
        this.state = {
            main_body: '我是 Money 页面'
        }
    }
    render(){
        return (
          <div>
                <Redirect to="/workplace/money/" />
                <h3>{this.state.main_body}</h3>
          </div>
        )
    }
}

export default Money