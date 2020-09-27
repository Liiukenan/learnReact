import React, { useReducer } from 'react';
function ReducerDemo(){
    const [count,dispatch] = useReducer((state,action)=>{
        switch(action) {
            case 'add': return state+1;
            case 'sub':return state-1;
            default: return state;
        }
    },0)
    // 0代表默认值
    return(
        <div>
            <h2>分数:{count}</h2>
            <button onClick={()=>{dispatch('add')}}>加号</button>
            <button onClick={()=>{dispatch('sub')}}>减号</button>
        </div>
    )
}
export default ReducerDemo;