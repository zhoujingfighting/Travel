<template>
    <div class="list" ref="wrapper">
        <!-- ref帮助获取DOM -->
       <div>
           <div class="area">
           <div class="title border-topbottom">当前城市</div>
           <div class="button-list">
               <div class="button-wrapper">
                   <div class="button">北京</div>
                </div>
           </div>
           <!-- 消除一像素差 -->
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">北京</div>
                 </div>
                 <div class="button-wrapper">
                    <div class="button">北京</div>
                 </div>
                 <div class="button-wrapper">
                    <div class="button">北京</div>
                 </div>
                 <div class="button-wrapper">
                    <div class="button">北京</div>
                 </div>
                 <div class="button-wrapper">
                    <div class="button">北京</div>
                 </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">A</div>
            <!-- 不需要滚动 -->
            <div class="item-list">
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
           </div>
            <div class="title border-topbottom">A</div>
            <!-- 不需要滚动 -->
            <div class="item-list">
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
           </div>
       </div>
       </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
    name : 'cityList' , 
    mounted(){
        this.scroll = new Bscroll(this.$refs.wrapper)
    }
}
</script>
<style scoped lang="stylus">
@import '../../../assets/styles/iconfont/varibles.styl'
    .boder-topbottom
        &:before
        //伪元素
            border-color : #777
        &:after
            border-color : #777
    .list
        overflow: hidden;
        position:absolute;
        top:2.74rem
        left:0
        right:0
        bottom:0
        .title
            line-height :.54rem
            background: #eee;
            padding-left:.2rem
            text-align :left
            color : #666
            font-size:.26rem
        .button-list
            overflow: hidden;
            padding : .1rem .6rem .1rem .1rem
            .button-wrapper
                width : 33.33%
                float : left
                .button
                    margin : .1rem
                    padding : .1rem 0
                    text-align : center            
                    border:.02rem solid #ccc
                    border-radius:.06rem
        .item-list
            .item
                line-height : .76rem
                padding-left : .2rem
                text-align : left
</style>