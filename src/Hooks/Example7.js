import React,{useState,useMemo}from 'react'
function Example7(props) {
     const [girlName,setGirl]=useState('小红')
     const [boyName,setBoy]=useState('霆锋')
     // const add=()=>{
     //      console.log('add');
     //      return boyName;
     // }
     
     const add=useMemo(()=>{
          console.log('addd');
          return ()=>boyName
     },[boyName])
     const abc=useMemo(() => {
          return ()=>boyName
          }, [boyName])
     return (
          <div>
               <div>
                   <button onClick={()=>{setGirl(new Date().getTime()+'小丽')}}>{girlName}</button> 
                   <button onClick={()=>{setBoy(new Date().getTime()+'克难')}}>{boyName}</button> 
               </div>
               <div>
                    {add()}
               </div>
               <div>
                    {abc()}
               </div>
               <div>
                    <button onClick={()=>{setBoy(new Date().getTime()+'郑伊健')}}>点击</button>
               </div>
              
          </div>
      );
}
export default Example7