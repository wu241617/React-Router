import React, { Component } from 'react';

class HTML extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '这是 HTML 页面',
            paramsID:''
        }
    }
    render() { 
        return (
            <h3>
                <span>{this.state.text} ---》 {this.state.paramsID}</span>
            </h3>
        )
    }
    componentDidMount(){
        let paramsID = this.props.match.params.id
        console.log(paramsID)
        this.setState({
            paramsID: paramsID
        })
    }
}
 
export default HTML;