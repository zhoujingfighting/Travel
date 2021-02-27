<template>
    <div>
        <ul>
            <!-- 这个是为了消除1px的像素差 -->
            <li class="item border-bottom" v-for="(item,index) of recommendList" :key="index">
                <div class="item-img-wrapper">
                    <img :src="item.imgurl" class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">大连圣亚海洋世界</p>
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
    data(){
        return {
            recommendList : [
                {id : '0001' , imgurl : 'https://imgs.qunarzz.com/sight/p0/1607/21/2142167d4b1bfa84b4.water.jpg_710x360_2212cec6.jpg'},
                {id : '0002' , imgurl : 'https://imgs.qunarzz.com/sight/p0/1607/21/2142167d4b1bfa84b4.water.jpg_710x360_2212cec6.jpg'},
                {id : '0003' , imgurl : 'https://imgs.qunarzz.com/sight/p0/1607/21/2142167d4b1bfa84b4.water.jpg_710x360_2212cec6.jpg'},
            ]
        }
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