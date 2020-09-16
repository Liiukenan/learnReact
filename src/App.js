import React, { Component } from "react";
import Xiaojiejie from "./Xiaojiejie";
class App extends Component {
  
  UNSAFE_componentWillMount() {
      console.log('将要挂载');
  }
  componentDidMount() {
      console.log('挂载完成');
  }
  render() {
    console.log('挂载中');
    return <Xiaojiejie />;
  }
}
export default App;
