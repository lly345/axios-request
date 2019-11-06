import Vue from 'vue'
import Vuex from 'vuex'
import Login from './module/login'

Vue.use(Vuex)
const store = new Vuex.Store({
    strict:false,//非严格模式下
    modules:{
        Login
    }
})

window.$store=store

export default store