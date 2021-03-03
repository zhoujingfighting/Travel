<template>
  <div id="app">
   <!-- 当前路由地址显示的内容 -->
   <keep-alive>
     <!-- 每一次获得的结果放进内存中,不去请求ajax请求 , 直接取得缓存数据 -->
        <router-view/>
   </keep-alive>
  </div>
</template>

<script>
// 单文件组件r4rfrrr
export default {
  name: 'App'
}
</script>

<style>
.slick-list, .slick-track { touch-action:pan-y; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>