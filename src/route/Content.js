import React,{useState}from 'react'
import './style.styl'
import {Route,Link} from 'react-router-dom'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'
import Article from './Article'
function Content() {
    const [show,setShow]=useState('父与子')
        return (
            <div className="home">
                {show}
                <div className="top" style={{marginTop:'50px'}}>
                    <Link to="/content/content1">跳转到1</Link>
                    <Link to="/content/content2">跳转到2</Link>
                    <Link to="/article">跳转到3</Link>
                </div>
                <div className="contet">
                     <Route path="/Content/Content1"  component={Content1}></Route>
                     <Route path="/Content/Content2"  component={Content2}></Route>
                     <Route path="/Article"  component={Article}></Route>
                </div>
                <Content3 setShow={setShow} show={show}>
                    测试测试
                </Content3>
            </div>
            
        );
    }
export default Content;