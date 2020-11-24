import React, { Component } from 'react'
import './AppRouter.css'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import HTML from './Components/HTML'
import CSS from './Components/CSS'
import JS from './Components/JS'
import VUE from './Components/VUE'
import REACT from './Components/REACT'


class AppRouter extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: 'React-Router动态传值-2'
        }
    }
    
    render(){
        return (
           <div id="container">
                <h3 style={{'marginBottom':'10px'}}>{this.state.text}</h3>
                <hr />
                <Router>
                    <ul>
                        <li><Link to="/html/1">HTML</Link></li>
                        <li><Link to="/css">CSS</Link></li>
                        <li><Link to="/js">JS</Link></li>
                        <li><Link to="/vue">VUE</Link></li>
                        <li><Link to="/react">REACT</Link></li>
                    </ul>
                    <Route path="/html/:id" exact component={HTML}/>
                    <Route path="/css" exact component={CSS}/>
                    <Route path="/js" exact component={JS}/>
                    <Route path="/vue" exact component={VUE}/>
                    <Route path="/react"exact  component={REACT}/>
                </Router>
           </div>
        )
    }
}

export default AppRouter