import React, { Component } from "react";
import PropTypes from "prop-types";
class Xiaoitem extends Component {
  UNSAFE_componentWillMount() {
    // console.log("1将要挂载");
  }
  componentDidMount() {
    // console.log("3挂载完成");
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // console.log("更新前奏（更新1）");
    // return true;
    // console.log(nextState);
    // console.log(nextProps);
    // console.log(nextContext);

    // 组件优化
    if(nextProps.content!==this.pros.content){
      return true;
    }
    return false;
  }
  UNSAFE_componentWillUpdate() {
    // console.log("将要更新(更新2)");
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log("更新完毕，挂载完毕后（更新4）");
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    // 组件第一次存在于dom中，函数不会执行，如果已经存在dom中，函数才会被执行
    // 最早更新的时候执行
    // 次序

    // console.log("顶层组件(更新0)");
  }
  componentWillUnmount() {
      // console.log('组件被删除内容的时候执行');
  }
  
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleClick=this.handleClick.bind(this)
  }
  // handleClick(index){
  //    this.props.deleItem(this.props.index)
  // }
  render() {
    // console.log("2挂载中(更新3)");
    console.log(23432);
    return (
      //  dangerouslySetInnerHTML={{ __html:this.props.content}}
      <li onClick={this.props.deleItem}>
        {this.props.avaname} {this.props.content}
      </li>
    );
  }
}

export default Xiaoitem;

Xiaoitem.propTypes = {
  // 必须传值 isRequired
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  avaname: PropTypes.string.isRequired,
};
Xiaoitem.defaultProps = {
  avaname: "kenan",
};
