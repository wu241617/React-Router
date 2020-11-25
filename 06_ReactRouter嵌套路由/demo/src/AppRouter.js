import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import './AppRouter.css'
import Index from './Components/Index'
import Video from './Components/Video'
import WorkPlace from './Components/WorkPlace'

class AppRouter extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: 'React-Router 嵌套路由',
            main_left: 'Router-Nav',
            navList: [
                {path: '/index/', text: '博客首页', exact: false, component: Index},
                {path: '/video/', text: '视频教程', exact: false, component: Video},
                {path: '/workplace/', text: '职场技能', exact: false, component: WorkPlace}]
        }
    }

    render(){
        return (
           <div>
                <h3 className="title">
                    <span>{this.state.title}</span>
                </h3>
                <hr />
                <Router>
                <div id="container">
                    <div id="main_left">
                    <h3>{this.state.main_left}</h3>
                        
                        <ul>
                            {
                                this.state.navList.map((item,index) => {
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
                    <div id="main_right">
                        <Route path="/" exact component={Index}/>
                        {
                            this.state.navList.map((item,index) => {
                                return (
                                 <Route key={index} path={item.path} exact={item.exact} component={item.component}/>
                                )
                            })
                        }
                    </div>
                </div>
                </Router>
           </div>
        )
    }
}

export default AppRouter