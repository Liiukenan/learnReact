import React,{useContext} from 'react'
import {ColorContext,UPDATE_COLOR} from './Color'
function Buttons(props) {
    const {dispatch} =useContext(ColorContext)
    const switchColor=(color)=>{
        dispatch({
            type: UPDATE_COLOR,
            color:color
        })
    }
     return (
          <div>
              <button onClick={()=>{switchColor('red')}}>
                  红色
              </button>
               <button onClick={()=>{switchColor('yellow')}}>
                  黄色
              </button>
          </div>
      );
}
export default Buttons