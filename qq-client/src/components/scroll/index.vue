<template>
    <div class="scroll-box" :ref='propsref'>
      <div>
          <slot></slot>
      </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
   props:{
       propsref:{
           type:String,
           default:'.scroll-box'
       }
   },
   mounted() {
     const  scroll = new Bscroll(this.propsref,{
        scrollY: true,
        click: true
        })
   }
}
</script>

<style>
.scroll-box{
    flex: 1;
   overflow: hidden;
}
</style>
