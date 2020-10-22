import React,{useState} from 'react'
import Counter from './Counter'
import CountContext from './createContext'
import Test from './Test1'
function Example3(props){
    const[count,setCount]=useState(0)
    return (
        <div>
            <p>
                ked {count} timesw
            </p>
            <button onClick={()=>{setCount(count+1)}}>增加</button>
            <CountContext.Provider value={count}>
                <Counter />
                <Test />
            </CountContext.Provider>
            {/* <CountContext.Provider value={count+2}>
                <Test />
            </CountContext.Provider> */}
        </div>
    )
}

export default Example3;