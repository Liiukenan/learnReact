import React,{useEffect,useReducer,useState} from 'react';
// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
import {initState,context,countReducer} from './reducer/index'
import Count from './reducer/Count'
import ShowCount from './reducer/ShowCount'



function Example11() {
	let store=useReducer(countReducer,initState)
	useEffect(()=>{
		console.log('store',store)
	})
	let linkArr=[
		{
			path:'/page1',
			label:'页面1'
		},
		{
			path:'/page2',
			label:'页面2'
		},
		{
			path:'/page3',
			label:'页面3'
		}
	]
	let [currentIndex,setCurrentIndex]=useState(0)
	function changeCurrentIndex(index){
		setCurrentIndex(index)
	}
  return (
    <context.Provider value={store}>
    <Router>
		<div className="App">
			<ul className="list">
				{
					linkArr.map((item,index)=>{
						return <li className="list-item" onClick={(e)=>changeCurrentIndex(index,e)} key={index}><Link to={item.path} className={`${index===currentIndex?'active':''}`}>{item.label}</Link></li>
					})
				}
			</ul>
			<Route path='/page1' component={Page1} />
			<Route path='/page2' component={Page2} />
			<Route path='/page3' component={Page3} />
		</div>
        </Router>
    </context.Provider>
  );
}

function Page1(){
	return (
		<div>
			<Count></Count>
		</div>
	)
}
function Page2(){
	return (
		<div>
			<ShowCount></ShowCount>
		</div>
	)
}
function Page3(){
	return (
		<div>
			this is  page3
		</div>
	)
}
export default Example11;

