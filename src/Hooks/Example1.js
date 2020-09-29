import React,{useState} from 'react'
function Example1(){
    const[count,setCount]=useState(0)
    const[age]=useState('kenan')
    const[sex,setSex]=useState('男')
    const myCount=()=>{
        setCount(count+1)

    }
    const mySex=()=>{
        setSex('女')
    }
    return (
        <div>
            <p>
                you clic{age}
                {sex}
                ked {count} times
                
            </p>
            <button onClick={myCount}>增加</button>
            <button onClick={mySex}>change</button>
        </div>
    )
}
export default Example1;