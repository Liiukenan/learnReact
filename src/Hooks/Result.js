import React,{useState} from 'react'
import useCounterModel from "../Store";

function Result(props) {
    
    const counter = useCounterModel();
    const [log,setLog]=useState([]);
    const logCount = () => {
        const c = useCounterModel.data;
        setLog(log.concat(c));
    };
    // console.log(...counter);
     return (
          <div>
              <p>{counter.count}</p>
              <button onClick={counter.decrement}>减1</button>
              <button onClick={logCount}>静态</button>
          </div>
      );
}
export default Result