<template>
    <div class="home">
      <home-header ></home-header>
      <!-- 父组件给子组件传值通过属性 -->
      <home-swiper :list='swiperList'></home-swiper>
      <home-icons :iconList='iconList'></home-icons>
      <home-recommend :recommendList='recommendList'></home-recommend>
      <home-weekend :weekendList='weekendList'></home-weekend>
    </div>
</template>
<script>
//整个页面应该只需要发送一个ajax请求
import homeHeader from './components/header'
import homeSwiper from './components/swiper'
import homeIcons from './components/icons'
import homeRecommend from './components/recommend'
import homeWeekend from './components/weekend'
import axios from 'axios'
//home也将总组件
export default {
    name : 'home' , 
    components : {
        homeHeader : homeHeader , 
        homeSwiper,
        homeIcons , 
        homeRecommend , 
        homeWeekend
    } ,
    data(){
        return {
            swiperList : [] , 
            recommendList : [] , 
            iconList : [] , 
            weekendList : []
        }
    },
    methods : {
        getHomeinfo(){
            axios.get('/api/index.json')//返回promise对象]
                .then(this.getHomeinfosucc)
        },
        getHomeinfosucc(res){
            res = res.data
            if(res.ret && res.data){
                const data = res.data 
                this.swiperList = data.swiperList
                this.recommendList = data.recommendList
                this.iconList = data.iconList
                this.weekendList  = data.weekendList
            }
        }
    }, 
    mounted(){
        this.getHomeinfo()
        //触发获取信息的函数
    }
}
</script>
<style scoped lang="stylus">
</style>