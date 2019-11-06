import request from '../utils/request'

export function getmovieList(params) {
    console.log(params)
    const url = '/api/getmovieList'
    return request.get(url, {
        params
    })
}