<template>
    <div class="header">
        城市选择
        <router-link to="/">
        <div class="iconfont headerback">&#xe685;</div>
        </router-link>
    </div>
</template>
<script>
export default {
    name : 'cityHeader'
}
</script>
<style scoped lang="stylus">
@import '../../../assets/styles/iconfont/varibles.styl';
    .header
        position: relative;
        overflow :hidden
        height :.86rem
        line-height : .86rem
        text-align :center
        color : #fff
        background: $bgColor
        .headerback
            text-align :center
            color: #fff;
            position: absolute;
            top:0
            left:.109rem
            font-size:.4rem;
</style>