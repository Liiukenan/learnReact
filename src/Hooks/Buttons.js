import React,{useContext} from 'react'
import {ColorContext,UPDATE_COLOR} from './Color'
function Buttons(props) {
    const {dispatch} =useContext(ColorContext)
    function switchColor(cl){
        dispatch({
            type: UPDATE_COLOR,
            color:cl
        })
       
    }
     return (
          <div>
              <button onClick={switchColor("red")}>
                  红色
              </button>
               <button onClick={()=>{dispatch({
            type: UPDATE_COLOR,
            color:"yellow"
        })}}>
                  黄色
              </button>
          </div>
      );
}
export default Buttons