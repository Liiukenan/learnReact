import React,{useState ,createCon} from 'react'
function Example5(props) {
     const [count,setCount]=useState(0)
     const add=()=>{
          setCount(count+1)
     }
     return (
          <div>
               <div>{count}</div>
               <button onClick={add}>click</button>
          </div>
      );
}
export default Example5