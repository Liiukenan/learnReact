import React,{useContext} from 'react'
import {context} from './index'
function  Count(){
    let [state,dispatch]=useContext(context)
    return (
        <div>
           <h1>count:{state.count}</h1>
           <div>
            <button style={{width:'128px',height:'30px'}} onClick={()=>dispatch({type:'decrement'})}>-</button>
            <button style={{width:'128px',height:'30px'}} onClick={()=>dispatch({type:'increment'})}>+</button>
           </div>
        </div>
    )
}
export default Count
