import React,{useState} from 'react'
function Example1(){
    const[count,setCount]=useState(0)
    const[age]=useState('kenan')
    const[sex,setSex]=useState('男')
    return (
        <div>
            <p>
                you clic{age}
                {sex}
                ked {count} times
                
            </p>
            <button onClick={()=>{setCount(count+1)}}>增加</button>
            <button onClick={()=>{setSex('女')}}>change</button>
        </div>
    )
}
export default Example1;