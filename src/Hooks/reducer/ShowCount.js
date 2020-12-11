import React,{useContext} from 'react'
import {context} from './index'

function ShowCount(){
    let [state]=useContext(context)
    return (
        <div>
           <h1>count:{state.count}</h1>
        </div>
    )
}
export default ShowCount