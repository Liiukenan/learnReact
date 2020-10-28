import React from 'react'
function Content1(props) {
        const back=()=>{
            // console.log(props);
            props.history.goBack();
        }
        return (
            <div>
               这是路由
               <button onClick={back}>
                    返回
               </button>
               <button>
                   {props.children}
               </button>
            </div>
        );
    }
export default Content1;