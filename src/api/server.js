import axios from 'axios'
axios.defaults.baseURL='http://www.baidu.com'
export function _getList(){
    return axios.get('/list')
}
export function _login(data){
    return axios.post('/login',data)
}