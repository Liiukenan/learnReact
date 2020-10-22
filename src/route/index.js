import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Content from './Content'
function AppRouter(){
    return(
        <div>
           <Router>
                <Route path="/"  component={Content}></Route>
            </Router> 
        </div>
        
    )
}
export default AppRouter;