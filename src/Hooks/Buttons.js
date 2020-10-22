import React,{useContext} from 'react'
import {ColorContext,UPDATE_COLOR} from './Color'
function Buttons(props) {
    const {dispatch} =useContext(ColorContext)
     return (
          <div>
              <button onClick={()=>{dispatch( type: UPDATE_COLOR,color:"red")}}>红色</button>
              <button onClick={()=>{dispatch( type: UPDATE_COLOR,color:"yellow")}}>红色</button>黄色</button>
          </div>
      );
}
export default Buttons