import React, { useReducer } from 'react';
function ReducerDemo(){
    const [count,dispatch] = useReducer((state,action)=>{
        switch(action) {
            case 'add': return state+1;
            case 'sub':return state-1;
            default: return state;
        }
    },0)
    const add=()=>{
        dispatch('add')
    }
    const sub=()=>{
        dispatch('sub')
    }
    // 0代表默认值
    return(
        <div>
            <h2>分数:{count}</h2>
            <button onClick={add}>加号</button>
            <button onClick={sub}>减号</button>
        </div>
    )
}
export default ReducerDemo;