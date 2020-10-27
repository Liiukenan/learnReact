import { useState } from "react";
import { createModel } from "hox";
import { useSessionStorageState, useUpdateEffect} from 'ahooks';
function useCounter(initialValue) {
//   const [count, setCount] = useState(0);
  const [message, setMessage] = useSessionStorageState('user-message', '5');
  const [count,setCount]=useState(initialValue ?? JSON.parse(message));
  useUpdateEffect(() => {
    // 每次更新都执行
    setMessage(count);
    return () => {
      // do something
      // 第一次不执行，随后每次组件更新后执行
      
    };
  }, [count]);
  const decrement = () =>{
      setCount(count - 1);
      
  } 
  const increment = () =>{
     setCount(count + 1); 
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
