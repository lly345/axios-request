import request from '@/utils/request'
import { getSession } from '@/utils';
import axios from "axios"

// const getToken=()=>getSession('token')

export function loginuser(params){
  const url="/api/user/login"
  return request.post(url,params)
}