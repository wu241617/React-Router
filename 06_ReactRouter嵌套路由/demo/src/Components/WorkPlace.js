import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import '../AppRouter.css'
import Money from '../Components/workplace/Money'
import Getup from '../Components/workplace/Getup'

class WorkPlace extends Component {
    constructor(props){
        super(props)
        this.state = {
            list: [{path:'/workplace/money/', text: 'Money 教程'}, {path:'/workplace/getup/', text: 'Getup 教程'}]
        }
    }

    render(){
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
                <Route path="/workplace/" exact component={Money} />
                <Route path={this.state.list[0].path} component={Money} />
                <Route path={this.state.list[1].path} component={Getup} />
            </div>
           </div>
        )
    }
}

export default WorkPlace