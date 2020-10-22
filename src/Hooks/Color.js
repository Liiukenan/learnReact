import React,{createContext,useReducer} from 'react'
export const ColorContext=createContext({})
export const UPDATE_COLOR="UPDATE_COLOR"
const reducer=(state,action)=>{
    switch(action.type){
        case UPDATE_COLOR:
            return action.color
            break;
        default:
            return state;
            break;
    }
}
export function Color(props) {
     const [color,dispatch]=useReducer(reducer,'blue');
     return (
          <div>
              <ColorContext.Provider value={{color,dispatch}}>
                {props.children}
              </ColorContext.Provider>
          </div>
      );
}
export default Color