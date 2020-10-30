import React ,{useRef,useState,useEffect}from 'react'
function Example9(props) {
    const inputEl=useRef(null)
    const inputEll=useRef(null)
    const [textd,setText]=useState('kenan')
    const [count,setCount]=useState(0)
    const inputC=useRef('保存')
    const onButtonClick=()=>{
        inputEl.current.value="hello,useRef"
        inputEll.current.href="http://www.baidu.com"
        setCount(count+1);

    }
    useEffect(() => {
        inputC.current.value=textd;
        console.log(inputC);
    },[textd]);
     return (
          <div>
              <input type="text" ref={inputEl}/>
              <a href="###" ref={inputEll}>跳转</a>
              <input type="text" ref={inputC}/>

              <input type="text" value={textd} onChange={(e)=>{setText(e.target.value)}}/>
              <button onClick={onButtonClick}>展示</button>
              <br/>
              <button onClick={()=>setText(new Date().getTime())}>
                  点击2
              </button>
          </div>
      );
}
export default Example9