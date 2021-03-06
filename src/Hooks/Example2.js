import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

function Index(){
    //解绑组件更新
    useEffect(()=>{
        console.log(1342432);
        return()=>{
            console.log('走了小可爱index');
        }
    },[])
    // [] 关闭组件，彻底解绑,不然会每次解绑
    return <h2>Index</h2>
}
function List(){
    console.log(11);
    useEffect(()=>{
         return()=>{
            console.log('走了小可爱list');
        }
    },[])
    return <h2>list page</h2>
}
function Example2(){
    const[count,setCount]=useState(0)
    const[age]=useState('kenan')
    const[sex,setSex]=useState('男')
    useEffect(()=>{
        console.log(count);
        // 类似于生命周期函数里面的更新
        return()=>{
            console.log('=============');
            // "更新count的时候会出现'========'"
        }
    },[count])
    return (
        <div>
            <p>
                you clic{age}
                {sex}
                ked {count} times
                
            </p>
            <button onClick={()=>{setCount(count+1)}}>增加</button>
            <button onClick={()=>{setSex('女')}}>change</button>
            <Router>
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                        <Link to="/list/">列表</Link>
                    </li>
                </ul>
                <Route path='/' exact component={Index} />
                <Route path='/list/'  component={List} />
            </Router>
        </div>
    )
}
export default Example2;