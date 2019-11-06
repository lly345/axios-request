import  axios from 'axios'
import { getSession } from '@/utils';
import { Message } from 'element-ui';
import {responseText} from './config.js'
import qs from 'qs'

const getToken=()=>getSession('token')==null?'':getSession('token')

const request = axios.create({
    // baseURL: process.env.BASE_URL,  // api的base_url
    timeout: 5000  // 请求超时时间
});

// 请求拦截
request.interceptors.request.use(config => {
	// 在发送请求之前做些什么
    config.method === 'post'        
    ? config.data = qs.stringify({...config.data})        
    : config.params = {...config.params};    
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';  
    config.headers['authorization']=getToken()
    return config;
})

// 响应拦截
request.interceptors.response.use(response => {
    if(response.status==401||response.status==500){
        Message({
            type: responseText[response.status].type || 'success',
            message: responseText[response.status].message || ''
        })
    }
    return response;

},err=>{
  return Promise.reject(err)
})

export default request