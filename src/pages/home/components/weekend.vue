<template>
    <div>
        <ul>
            <!-- 这个是为了消除1px的像素差 -->
            <li class="item border-bottom" v-for="(item,index) of weekendList" :key="index">
                <div class="item-img-wrapper">
                    <img :src="item.imgUrl" class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">浪漫大连首站,浪漫的海洋主题乐园</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name : 'homeWeekend' , 
    props:{
        weekendList  : Array
    }
}
</script>
<style scoped lang="stylus">
    .item-img-wrapper
        overflow :hidden
        height :0
        padding-bottom :33.9%
        .item-img
            width:100%
    .item-info
        margin-left : .2rem
        text-align :left
        .item-title
            line-height :0.54rem
            font-size :.32rem
        .item-desc
            line-height : .4rem
            color :#ccc
        .item-button
            display:block
            width:2rem
            height : .44rem
            line-height:.44rem
            background: #ff9300
            color: #fff;
            border-radius : .06rem
</style>