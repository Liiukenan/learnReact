import React, { Component,Fragment } from 'react'
import Xiaoitem from './Xiaoitem'
import AddItem from './Additem'
class xiaojiejie extends Component {
    constructor(props) {           
       super(props);
       this.state = {
           inputValue:'kenan',
           list:[
               '泰式按摩'
           ],
           avaname:null
       }
       this.inputChange=this.inputChange.bind(this)
       this.addList=this.addList.bind(this)
    }
    inputChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue]
        })
    }
    deleItem(i){
        let list=this.state.list;
        list.splice(i,1);
        this.setState({
            list:list
        })
    }
    render() {
        return (
            <Fragment>
           {/* 注释 */}
                <AddItem inputChange={this.inputChange} inputValue={this.state.inputValue} addList={this.addList}/>
                <ul>
                  {
                      this.state.list.map((item,index)=>{
                          return(
                              <Xiaoitem list={this.state.list} key={index+item} content={item} deleItem={this.deleItem.bind(this,index)} avaname={this.state.avaname}/>
                          )
                      })
                  }
                    
                    
                </ul>
            </Fragment>
        );
    }
}
export default xiaojiejie;