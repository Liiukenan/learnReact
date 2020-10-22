import React,{useContext} from 'react'
import createContext from './createContext'
function Counter(props) {
    let count=useContext(createContext)
    // 向子组件传递
    // console.log(props);
    return (
        <h3>{count}</h3>
    )
}
export default Counter