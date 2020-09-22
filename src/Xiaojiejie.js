import React, { Component,Fragment } from 'react'
import Xiaoitem from './Xiaoitem'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
// import AddItem from './Additem'
import './xiaojiejie.styl'
import {_getList,_login} from './api/server'
class xiaojiejie extends Component {
    constructor(props) {           
       super(props);
       this.state = {
           inputValue:'kenan',
           list:[
               '泰式按摩'
           ],
           avaname:'1234'
       }
       this.inputChange=this.inputChange.bind(this)
       this.addList=this.addList.bind(this)
    }
    componentDidMount() {
        console.log('====================================');
        console.log(process.env.NODE_ENV);
        console.log('====================================');
        let list=_getList();
        list.then((res)=>{
            this.setState({
               list:res.data.data
            })
        })
        let loginData=_login({'user_id':'kenan'})
        loginData.then((res)=>{
            console.log(res);
        })
        
    }
    
    inputChange(e){
        this.setState({
            // inputValue:e.target.value
            inputValue:this.input.value
        })
    }
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue]
        },()=>{
            console.log(this.ul.querySelectorAll('li').length)
        })
        
    }
    deleItem(i){
        let list=this.state.list;
        list.splice(i,1);
        this.setState({
            list:list
        })
    }
    // input=(input)=>this.input=input
    /* <AddItem inputChange={this.inputChange} inputValue={this.state.inputValue} addList={this.addList} input={this.input}/> */

    render() {
        return (
            <Fragment>
                 <label htmlFor="kenan">增加</label>
                    <input id="kenan" type="text" onChange={this.inputChange} value={this.inputValue} ref={(input)=>this.input=input}/>
                    <button onClick={this.addList}>
                        增加
                    </button> 
                <ul ref={ul=>this.ul=ul}>
                    <TransitionGroup>
                        {
                            this.state.list.map((item,index)=>{
                                return(
                                    <CSSTransition timeout={1000} classNames='boss-text' unmountOnExit key={index+item} appear={true}>
                                        <Xiaoitem list={this.state.list} key={index+item} content={item} deleItem={this.deleItem.bind(this,index)} avaname={this.state.avaname}/>
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                    
                    
                </ul>
            </Fragment>
        );
    }
}
export default xiaojiejie;