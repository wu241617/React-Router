import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './components/Index'
import List from './components/List'
import Home from './components/Home'

class AppRouter extends Component {
    constructor(props){
        super(props)
        this.state = {
            text:'React-Router 重定向'
        }
    }
    render(){
        return (
             <div>
                <h3>{this.state.text}</h3>
                <Router>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/list">列表</Link></li>
                    </ul>
                    <Route path="/" exact component={Index}/>
                    <Route path="/list" component={List}/>
                    <Route path="/home/" component={Home}/>
                </Router>
             </div>
        )
    }
}

export default AppRouter