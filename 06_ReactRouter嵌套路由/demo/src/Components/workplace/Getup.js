import React, { Component } from 'react'

class Getup extends Component {
    constructor(props){
        super(props)
        this.state = {
            main_body: '我是 Getup 页面'
        }
    }
    render(){
        return (
        <h3>{this.state.main_body}</h3>
        )
    }
}

export default Getup