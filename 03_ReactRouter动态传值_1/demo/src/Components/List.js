import React, { Component } from 'react'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text:'这是列表页面',
            params:''
        }
    }
    render() { 
        return (
            <h3>
                <span
                style={{'color':'green'}}
        >{this.state.text}: 携带的参数为 ---》 {this.state.params}</span>
            </h3>
        );  
    }
    componentDidMount(){
        console.log(this.props.match.params.id)
        this.setState({
            params:this.props.match.params.id
        })
    }
}
 
export default List;