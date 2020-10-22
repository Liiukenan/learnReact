import React,{useState} from 'react'
import Counter from './Counter'
import CountContext from './createContext'
function Example3(props){
    const[count,setCount]=useState(0)
    return (
        <div>
            <p>
                ked {count} times
            </p>
            <button onClick={()=>{setCount(count+1)}}>增加</button>
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}

export default Example3;