import React,{useState,createContext,useContext} from 'react'
const CountContext=createContext()
function Counter(){
    let count=useContext(CountContext)
    // 向子组件传递
    
    return (
        <h3>{count}</h3>
    )
}
function Example3(){
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