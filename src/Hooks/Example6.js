import React from 'react'
import useCounterModel from "../Store";
import Result from './Result'
function Example6(props) {
     const counter = useCounterModel();
     return (
          <div>
               <p>{counter.count}</p>
               <button onClick={counter.increment}>Increment</button>
               <Result />
          </div>
     );
}
export default Example6