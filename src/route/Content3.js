import React from 'react'
function Content3(props) {
    const {setShow,show}=props;
     return (
          <button onClick={()=>setShow('子传父')}>
              {props.children} {show}
          </button>
      );
}
export default Content3