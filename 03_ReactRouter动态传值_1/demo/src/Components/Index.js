import React, { Component } from 'react'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text:'这是首页页面'
        }
    }
    render() { 
        return (
            <h3>
                <span
                style={{"color":'red'}}
                >{this.state.text}</span>
            </h3>
        )
    }
}
 
export default Index