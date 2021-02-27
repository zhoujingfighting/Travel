<template>
    <div class="icons">
        <swiper :options="swiperOption">
        <!-- 这个的目的就是最外层的div包裹整个区间 -->
            <swiper-slide v-for="(item,index) of pages" :key="index">
                <div class="icon" v-for="it of item" :key="it.id">
                    <div class="icon-img">
                        <img :src="it.imgUrl" alt="" class="icon-img-content">
                    </div>
                    <p class="icon-desc">{{ it.desc}}</p>
                </div>
            </swiper-slide >
            <!-- 分区域 -->
        </swiper>
    </div>
</template>
<script>
export default {
    name : 'homeIcons' , 
    props: {
        iconList : Array
    },
    data(){
        return {
            swiperOption :{
                loop : false
            }
        }
    },
    computed : {
        pages(){
            const pages = []
            this.iconList.forEach((item,index) =>{
                const page = Math.floor(index / 8)
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>
<style scoped lang="stylus">
    .icons >>> .swiper-container
        height : 0
        padding-bottom :50%
    .icon  
        position: relative;
        overflow :hidden 
        float: left;
        width : 25%
        height : 0
        padding-bottom  : 25%
        .icon-img
            position: absolute;
            top:0
            left:0
            right:0
            bottom:0.44rem
            padding : .1rem
            .icon-img-content
                display :block
                height:100%
                margin:0 auto;
        .icon-desc
            position: absolute;
            left:0
            right:0
            bottom:0.08rem
            color:#333
            text-align :center
</style>