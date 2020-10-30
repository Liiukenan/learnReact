import React, {Fragment,useState, useMemo} from 'react'

// 产品名称列表
const nameList = ['apple', 'peer', 'banana', 'lemon']

const Example7 = (props) => {
    // 产品名称、价格
    const [price, setPrice] = useState(0)
    const [name, setName] = useState('apple')
    // const memo_getProductName = useMemo(() => {
    //     console.log('只执行一次');
    //     return()=>name  // 返回一个函数
    // }, [name])
    const memo_getProductName=()=>{
        console.log('执行很多次');
        return name
    }
    return (
        <Fragment>
            <p>{name}</p>
            <p>{price}</p>
            {/* <p>{getProductName()}</p> */}
            <p>{memo_getProductName()}</p>
            <button onClick={() => setPrice(price+1)}>价钱+1</button>
            <button onClick={() => setName(nameList[Math.random() * nameList.length << 0])}>修改名字</button>
        </Fragment>
    )
}
export default Example7
