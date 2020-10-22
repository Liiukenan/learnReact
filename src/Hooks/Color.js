import React,{createContext,useReducer} from 'react'
export const ColorContext=createContext({})
export const UPDATE_COLOR="UPDATE_COLOR"
const reducer=(state,action)=>{
    if(action.type===UPDATE_COLOR){
        return action.color
    }
    return state;
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