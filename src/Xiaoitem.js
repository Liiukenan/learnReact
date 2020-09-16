import React, { Component } from 'react';
// import PropTypes from "prop-types"
class Xiaoitem extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
        // this.handleClick=this.handleClick.bind(this)
    }
    // handleClick(index){
    //    this.props.deleItem(this.props.index)
    // }
    render() {
        return(
            
               <li onClick={this.props.deleItem}  dangerouslySetInnerHTML={{ __html:this.props.content}}>
                </li> 
            
        )
             
    }
}

export default Xiaoitem;
