import React, { Component } from 'react';
import '../AppRouter.css'
import { Redirect } from 'react-router-dom'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            main_right_header: '跟随一级菜单进行变化',
            main_body: '跟随二级菜单改变主体内容'
        }
    }
    render() { 
        return (
            <div>
                <Redirect to="/index/" />
                <div id="header">{this.state.main_right_header}</div>
                <div id="main_body">{this.state.main_body}</div>
            </div>
        )
    }
}
 
export default Index;