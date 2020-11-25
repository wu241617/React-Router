import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import ReactPage from './video1/ReactPage'
import Flutter from './video1/Flutter'
import Vue from './video1/Vue'
import '../AppRouter.css'

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{path:'/video/reactpage/', text: 'React 教程'}, {path:'/video/flutter/', text: 'Flutter 教程'}, {path:'/video/vue/', text: 'Vue 教程'}]
        }
    }
    render() { 
        return (
            <div>
            <div id="header" >
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={item.path}
                                    style={{'textDecoration':'none'}}
                                    activeClassName="link"
                                    >{item.text}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div id="main_body">
                <Route path="/video/" exact component={ReactPage} />
                <Route path={this.state.list[0].path} component={ReactPage} />
                <Route path={this.state.list[1].path} component={Flutter} />
                <Route path={this.state.list[2].path} component={Vue} />
            </div>
        </div>
        );
    }
}
 
export default Video;