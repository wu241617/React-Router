import React, { Component } from 'react'
// 用到 React-Router 相关组件的加载导入
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// 导入组件
import List from './Components/List'
import Index from './Components/Index'

// 无状态组件（函数）写法
// function AppRouter(){
//     // <Link> 组件相当于 a 标签，其中 to 为跳转路径
//     return (
//         <Router>
//             <ul>
//                 <li><Link to="/">首页</Link></li>
//                 <li><Link to="/list/">列表</Link></li>
//             </ul>
//             {/* Route 为通道，指定链接跳转显示内容组件，其中 exact 属性为精准匹配 */}
//             <Route path="/" exact component={Index} />
//             <Route path="/list/" component={List} />
//         </Router>
//     )
// }

class AppRouter extends Component {
    render(){
        // <Link> 组件相当于 a 标签，其中 to 为跳转路径
        return (
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                {/* Route 为通道，指定链接跳转显示的内容组件，其中 exact 属性为精准匹配 */}
                <Route path="/" exact component={Index}/>
                <Route path="/list/" component={List}/>
            </Router>
        )
    }
} 

export default AppRouter