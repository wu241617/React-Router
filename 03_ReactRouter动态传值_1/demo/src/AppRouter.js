import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import List from './Components/List'
import Index from './Components/Index'


class AppRouter extends Component {
    render(){
        return (
            <div>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/123">列表</Link></li>
                </ul>
                {/* Route 为规则通道，指定链接跳转显示的内容组件，其中 exact 属性为精准匹配 */}
                <Route path="/" exact component={Index}/>
                <Route path="/list/:id" component={List}/>
            </Router>
            <hr />
            <h3><span>React-Router动态传值</span></h3>
                <ul>
                    <li>设置规则</li>
                    <li>传递值</li>
                    <li>接收值</li>
                    <li>显示内容</li>
                </ul>
            </div>
        )
    }
}

export default AppRouter