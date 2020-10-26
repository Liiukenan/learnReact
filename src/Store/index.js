import { useState } from "react";
import { createModel } from "hox";
import { useSessionStorageState } from 'ahooks';
function useCounter(initialValue) {
//   const [count, setCount] = useState(0);
  const [message, setMessage] = useSessionStorageState('user-message', '5');
  const [count,setCount]=useState(initialValue ?? JSON.parse(message));
  const decrement = () =>{
      setCount(count - 1);
      setMessage(count-1);
  } 
  const increment = () =>{
     setCount(count + 1); 
     setMessage(count+1);
  }
  return {
    count,
    decrement,
    increment
  };
}
const useCounterModel = createModel(useCounter);
// const useCounterModelWithInitialValue = createModel(useCounter, 20);
export default useCounterModel
