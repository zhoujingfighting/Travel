<template>
<div class="wrapper">
     <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for = "item of swiperList" :key="item.id">
        <img class = "swiper-img" :src="item.imgurl" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
    name : 'homeSwiper' , 
    data(){
        return {
            swiperOption : {
                pagination : '.swiper-pagination'
            },
            swiperList : [{
                id : '0001', 
                imgurl : 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/8a8551fca334bcb5508bf1fab64842a9.jpg'},
                {
                id : '0002', 
                imgurl : 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/3da202a1d9e4275cca54efaad58e27d2.jpg'
            }]
        }
    }
}
</script>
<style lang="stylus" scoped >
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff;
        // 小圆点,点击页面上的
    .swiper-img
        width:100%
    .wrapper
        overflow: hidden;
        width :100%
        height : 0
        padding-bottom : 53.40%
        // 触发BFC 
</style>