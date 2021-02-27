<template>
    <div class="search">
      <input type="text" placeholder="输入城市名或拼音" class="searchinput">
    </div>
</template>
<script>
export default {
    name : 'citySearch'
}
</script>
<style scoped lang="stylus">
@import '../../../assets/styles/iconfont/varibles.styl';
    .search
        background: $bgColor;
        height :.64rem
        line-height:.64rem
        .searchinput
            box-sizing : border-box
            padding : 0 .1rem
            width:95%
            height : .54rem
            border-radius : .06rem
            text-align : center
            margin-bottom : .1rem
</style>