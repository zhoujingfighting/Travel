<template>
    <div class="header">
       <div class="header-left">
           <span class="iconfont back-icon">&#xe685;</span>
       </div>
       <div class="header-input">
           <span class="iconfont">&#xe67d;</span>
           请输入您要去的城市</div>
        <router-link to="/city">
            <!-- 配置路由信息 -->
       <div class="header-right arrow-icon">
           {{ this.city }}
           <span class="iconfont">&#xe686;</span>
        </div>
        </router-link>
    </div>
</template>
<script>
export default {
    name : 'homeHeader' , 
    //导出去的组件名称
    //别人引用的名称
    props : {
        city : String
    }
}
</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/iconfont/varibles.styl';
    .header
        display : flex
        line-height : .86rem
        background: $bgColor;
        color :#fff
        .header-left
            width: .64rem
            float :left
            .back-icon
                text-align :center
                font-size : .4rem
        .header-right
            width: 1.24rem
            float:right
            text-align :center
            color:#fff
        .header-input
            text-align :left
            flex: 1
            //自动撑开
            height : .64rem
            line-height : .64rem
            background: #fff
            color :#ccc
            margin-top : .12rem
            margin-left : .2rem
            padding-left : .2rem
</style>