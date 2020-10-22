import React,{useContext} from 'react'
import createContext from './createContext'
function Test1(props) {
     let count=useContext(createContext);
     return (
          <div>
              {count+2}
          </div>
      );
}
export default Test1