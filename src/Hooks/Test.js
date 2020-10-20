import React, { createContext, useContext } from "react";
const ContContext = createContext();
function Test(props) {
  let count = useContext(CountContext);
  // 向子组件传递
  return <h3>{count}</h3>;
}
export default Test;
