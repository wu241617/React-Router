import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import List from './List'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '这是首页页面',
            list: [
                {id:1, text: 'HTML'},
                {id:2, text: 'CSS'},
                {id:3, text: 'JS'},
                {id:4, text: 'VUE'},
                {id:5, text: 'REACT'}
            ]
        }
         /* 编程式重定向 */
        this.props.history.push('/home/')
    }
    render() { 
        return (
            <div>
                {/* 标签式重定向 */}
                 <Redirect to="/home/" />
                <h3 style={{'color':'red'}}>{this.state.text}</h3>
                <Router>
                    <ul>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                <li key={index}><Link to={'/list/' + item.id}>{item.text}</Link></li>
                                )
                            })
                        }
                    </ul>
                    <Route path="/list/:id" exact component={List}/>
                </Router>
            </div>

        );
    }
}
 
export default Index;