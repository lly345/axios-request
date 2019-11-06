import request from '@/utils/request'
import { getSession } from '@/utils';

const getToken=()=>getSession('token')

export  function getCarouselList(){
    return request.get('/api/getCarouselList',{
        headers:{
            authorization:getToken()
        }
    })
}


export function getRankList(){
    return request.get("/api/getRankList")
}
