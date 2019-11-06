<template>
    <Layout :headshow="true" title="QQ 音乐"> 
        <section class="content">
            <nav>
                <router-link to='/music/search' tag='span'>搜索</router-link>
                <router-link to='/music/rank' tag='span'>推荐</router-link>
                <router-link to='/music/toplist' tag='span'>列表</router-link>
            </nav>
            <router-view></router-view>
        </section>
    </Layout>
</template>

<script>
import Layout from '@/components/Layout/index'
export default {
  components:{
      Layout
  }
}
</script>

<style lang="scss">
 .content{
     flex: 1;
     overflow: hidden;
     display: flex;
     flex-direction: column;
 }
 nav{
     width: 100%;
     height: 44px;
     border-bottom: 1px solid #eeeeee;
     display: flex;
     justify-content: space-around;
     align-items: center;
     span{
         display: inline-block;
         width: 33%;
         height: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
       
     }
 }
 .active{
     color:#31c27c;
       border-bottom: 2px solid #31c27c;
 }
</style>
