<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="(item,index) of recommendList" :key="index">
                <img :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name : 'homeRecommend' , 
    props : {
        recommendList : Array
    }
}
</script>
<style scoped lang="stylus">
    .recommend-title
        line-height : .6rem
        background : #eee
        text-indent :.2rem
        text-align :left
    .item
        overflow: hidden;
        display :flex
        height : 1.9rem
        .item-info
            flex: 1;
            margin-left : .2rem
            text-align :left
            .item-title
                line-height :0.54rem
                font-size :.32rem
            .item-desc
                line-height : .4rem
                color :#ccc
            .item-button
                width:2rem
                height : .44rem
                line-height:.44rem
                background: #ff9300
                margin-top : .25rem
                color: #fff;
                border-radius : .06rem
</style>