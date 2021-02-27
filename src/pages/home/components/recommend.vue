<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="(item,index) of recommendList" :key="index">
                <img :src="item.imgurl">
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
    name : 'homeRecommend' , 
    data(){
        return {
            recommendList : [
                {id : '0001' , imgurl : 'https://imgs.qunarzz.com/p/tts9/1504/44/a245cf18242d9e.jpg_r_390x260x95_be374250.jpg'},
                {id : '0002' , imgurl : 'https://imgs.qunarzz.com/p/tts9/1504/44/a245cf18242d9e.jpg_r_390x260x95_be374250.jpg'},
                {id : '0003' , imgurl : 'https://imgs.qunarzz.com/p/tts9/1504/44/a245cf18242d9e.jpg_r_390x260x95_be374250.jpg'},
                {id : '0004' , imgurl : 'https://imgs.qunarzz.com/p/tts9/1504/44/a245cf18242d9e.jpg_r_390x260x95_be374250.jpg'},
                {id : '0005' , imgurl : 'https://imgs.qunarzz.com/p/tts9/1504/44/a245cf18242d9e.jpg_r_390x260x95_be374250.jpg'},
                {id : '0006' , imgurl : 'https://imgs.qunarzz.com/p/tts9/1504/44/a245cf18242d9e.jpg_r_390x260x95_be374250.jpg'},

            ]
        }
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