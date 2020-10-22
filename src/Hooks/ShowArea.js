import React,{useContext} from 'react';
import {ColorContext} from './Color'

function ShowArea(props) {
    const context = useContext(ColorContext);
     return (
          <div style={context}>
              字体颜色
          </div>
      );
}
export default ShowArea