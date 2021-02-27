<template>
<div class="wrapper">
     <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for = "item of list" :key="item.id">
        <img class = "swiper-img" :src="item.imgUrl" alt="" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
    name : 'homeSwiper' , 
    props : {
        list : Array
    },
    data(){
        return {
            swiperOption : {
                pagination : '.swiper-pagination' ,
                loop: true
            }
        }
    }
}
</script>
<style lang="stylus" scoped >
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff;
        // 小圆点,点击页面上的
    .wrapper
        overflow: hidden;
        width :100%
        height : 0
        padding-bottom : 31.25%
        // 触发BFC         
        .swiper-img
            width:100%
</style>