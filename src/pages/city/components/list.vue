<template>
    <div class="list" ref="wrapper">
        <!-- ref帮助获取DOM -->
       <div>
           <!-- Bscroll使用时必要得外层div包裹 -->
           <div class="area">
           <div class="title border-topbottom">当前城市</div>
           <div class="button-list">
               <div class="button-wrapper">
                   <div class="button">北京</div>
                </div>
           </div>
           <!-- 消除一像素差 border-bottom消除一像素偏差-->
        </div>
        <div class="area" >
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper" v-for="item of hotCities" :key="item.id" >
                    <div class="button">{{ item.name }}</div>
                 </div>
            </div>
        </div>
        <div class="area" 
        v-for = "(item , key) of cities" 
        :key="key" 
        :ref="key">
            <!--:ref可以直接选定DOM元素 -->
            <!-- 需要绑定值得时候就得加冒号 -->
            <div class="title border-topbottom">{{ key }}</div>
            <!-- 不需要滚动 -->
            <div class="item-list">
                <div class="item border-bottom" v-for="inner of item" :key="inner.id">
                    {{ inner.name }}
                    </div>
           </div>
       </div>
       </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
    name : 'cityList' , 
    props : {
        cities : Object , 
        hotCities : Array , 
        letter : String
        // 接受父组件传下来的值
    },
    computed:{
        letters(){
            const Letters = []
            for(let i in this.cities){
                Letters.push(i)
            }
            return Letters
        }
    },
    watch:{
        //Bscroll提供的接口
        //监听letter的变化
        letter(){ 
            if(this.letter){
                const element = this.$refs[this.letter]//获取的数祖
                //拿到指定DOM元素
                this.scroll.scrollToElement(element[0])
                //betterScroll自动滚到现在的区域
            }
        }
    } , 
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
        top : 1.5rem
        left : 0
        right : 0
        bottom : 0
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