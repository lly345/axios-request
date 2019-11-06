import {getSession} from '@/utils'

const getToken=()=>getSession('token')

export default {
   state:{
     token:getToken()||''
   },
   mutations:{
     SAVE_TOKEN(state,payload){
       console.log(state)
        state.token=payload
     }
   },
   actions:{
       
   }
}