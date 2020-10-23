import React, { useReducer } from 'react';
const initialState={count:1,num:2};
function reducer(state,action){
    switch (action.type) {
        case 'increment':
            return {count:state.count+1,num:state.num};
        case 'decrement':
            return {count:state.count-1,num:state.num};
        case 'cheng':
            return {count:state.count+1,num:state.num*2};
        default:
            throw new Error();
    }
}
function ReducerDemo(){
    const [state,dispatch] = useReducer(reducer,initialState);
    // 0代表默认值
    return(
        <div>
            <h2>分数:{state.count}</h2>
            <h3>第二个参数:{state.num}</h3>
            <button onClick={()=>dispatch({type:'increment'})}>加号</button>
            <button onClick={()=>dispatch({type:'decrement'})}>减号</button>
            <button onClick={()=>dispatch({type:'cheng'})}>乘法</button>
        </div>
    )
}
export default ReducerDemo;