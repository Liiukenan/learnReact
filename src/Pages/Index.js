import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
class Index extends Component {
    constructor(props) {           
       super(props);
       this.state = {
           list:[
               {
                   id:1,
                   cont:'kenan'
               },
               {
                   id:2,
                   cont:'tingting'
               }
           ]
       }
    }
    render() {
        return (
            <div>
                <Redirect to="/home/"></Redirect>
               这是首页
               <ul>
                {
                    this.state.list.map((item,index)=>{
                        return(
                                <li key={index}>
                                    <Link to={`/list/${item.id}/${item.cont}`}>{item.cont}</Link>
                                </li>
                            )
                        }
                    )
                }
               </ul>
            </div>
        );
    }
}
export default Index;