import React, { Component } from 'react'
import {Link} from 'react-router-dom'
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
       this.props.history.push('/home/')
    }
    render() {
        return (
            <div>
                {/* <Redirect to="/home/" /> */}
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