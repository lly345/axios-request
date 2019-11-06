<template>
    <header class="header">
        <slot>
            {{title}}
         </slot>    
    </header>
</template>

<script>
export default {
    name:"Header",
    props:["title"]
}
</script>

<style>
  .header{
      width: 100%;
      height: 44px;
      text-align: center;
      line-height: 44px;
      background: #31c27c;
      color:white;
  }

</style>
