import React, { Component } from 'react'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: '我是 Home 组件页面'
        }
    }

    render(){
        return (
        <h3>{this.state.text} ---》 Redirect</h3>
        )
    }
}

export default Home