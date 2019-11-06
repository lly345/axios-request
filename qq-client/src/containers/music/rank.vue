<template>
    <div class="rank-box">
          <swiper :options="swiperOption" ref="mySwiper" style="height:150px">
          <!-- slides -->
          <swiper-slide v-for="item in bannerList" :key="item.id">
              <img :src="item.picUrl" style="width:100%;">
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <scroll>
            <dl v-for="item in topList" :key="item.id" class="li">
                <dt class="img">
                    <img :src="`http://y.gtimg.cn/music/photo_new/T002R90x90M000${item.album.mid}.jpg?max_age=2592000`" >
                </dt>
                <dd>
                    <h4>{{item.name}}</h4>
                    <p>
                        <span v-for="el in item.singer" :key="el.id">{{el.name}}</span>
                    </p>
                </dd>
            </dl>
        </scroll>
    </div>
</template>

<script>
import {getCarouselList,getRankList} from '../../api/music'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import scroll from '@/components/scroll'
export default {
    data(){
        return{
             swiperOption: {
                pagination: {
                el: ".swiper-pagination"
                }
            },
          bannerList:[],
              topList:[]
        }
    },
     components: {
       scroll,
        swiper,
        swiperSlide
    },

   created() {
      this.getbannerList(),
      this.getTopsList()
   },

   methods: {
       async getbannerList(){
         const result = await getCarouselList()
         this.bannerList=result.data.data.data.slider
       },
         async getTopsList(){
         const result=await getRankList()
         this.topList=result.data.data.detail.data.songInfoList
       }
   }
}
</script>

<style>
@import url('swiper/dist/css/swiper.css');
.swiper-container{
  flex-shrink: 0;
}
.rank-box{
  flex: 1;
  display: flex;
  flex-direction: column;
}
.inbox{
  width: 100%;
  height: 100%;
 display: flex;
 flex-direction: column;
}
.li{
    width: 100%;
    height: 135px;
    display: flex;
    align-items: center;
}
.img{
    margin: 0 10px;
}
.swiper-container{
  width:100%
}
</style>
