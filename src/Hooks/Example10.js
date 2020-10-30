import React ,{useState,useEffect,useCallback} from 'react'
const useWinSize=()=>{
    const [size,setSize]=useState({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight,
    })
    const onResize=useCallback(
        () => {
          setSize({
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight,
          })
        },
        [],
    )
    useEffect(() => {
        window.addEventListener('resize',onResize)   
        return ()=>{
            window.removeEventListener('resize',onResize)
        }
    },[onResize]);
    return size;
}
function Example10(props) {
    const size=useWinSize();
     return (
          <div>
             {size.width}宽度
             <div>
                 {size.height}高度
             </div>
          </div>
      );
}
export default Example10