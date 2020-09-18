import axios from 'axios'
if(process.env.NODE_ENV === 'production'){
    axios.defaults.baseURL='http://www.baidusssss.com'
}else{
    axios.defaults.baseURL='https://www.easy-mock.com/mock/5f47dd07cad6947846f0009b/learn'
}
export function _getList(){
    return axios.get('/xiaolist')
}
export function _login(data){
    return axios.post('/login',data)
}