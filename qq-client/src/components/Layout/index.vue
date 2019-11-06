<template>
    <div class="wrap">
      <Head v-if="headshow" :title="title"></Head>
      <slot></slot>
      <Foot v-if="footshow"></Foot>          
    </div>
</template>

<script>
import Head from './Head'
import Foot from './Foot'
export default {
   props:{
     title:{
         type:String
     },
     headshow:{
         type:Boolean,
         default:false
     },
     footshow:{
         type:Boolean,
         default:false
     }
   },
  components:{
      Head,
      Foot
  }
}
</script>

<style>
  .wrap{
      width: 100%;
      height: 100%;
     display: flex;
     flex-flow: column nowrap;
  }
</style>
