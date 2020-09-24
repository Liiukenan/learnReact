import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Index from './Pages/Index';
import List from './Pages/List';
function AppRouter(){
    return(
        <Router>
            <ul>
                <li>
                    <Link to="/">
                        首页
                    </Link>
                    <Link to="/list/1234">
                        列表
                    </Link>
                </li>
            </ul>
            <Route path="/" exact component={Index}></Route>
            <Route path="/list/:id/:name" component={List}></Route>
        </Router>
    )
}
export default AppRouter;