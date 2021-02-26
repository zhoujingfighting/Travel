<template>
    <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
    </div>
</template>
<script>
import homeHeader from './components/header'
import homeSwiper from './components/swiper'
import homeIcons from './components/icons'
//home也将总组件
export default {
    name : 'home' , 
    components : {
        homeHeader : homeHeader , 
        homeSwiper,
        homeIcons
    }
}
</script>
<style scoped>

</style>