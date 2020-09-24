import React from 'react'
import './style.styl'
import {Route,Link} from 'react-router-dom'
import Content1 from './Content1'
import Content2 from './Content2'
function Home() {
        return (
            <div className="home">
                <div className="top">
                    <Link to="/content/content1">跳转到1</Link>
                    <Link to="/content/content2">跳转到2</Link>
                </div>
                <div className="contet">
                     <Route path="/Content/Content1"  component={Content1}></Route>
                     <Route path="/Content/Content2"  component={Content2}></Route>
                </div>
            </div>
        );
    }
export default Home;