<template>
    <ul class="alphabet">
        <li class="item" v-for="(item , key) of cities" :key="key">{{ key}}</li>
    </ul>
</template>
<script>
export default {
    name : 'cityAlphabet' , 
    props : {
        cities :Object
    }
}
</script>
<style scoped lang="stylus">
@import '../../../assets/styles/iconfont/varibles.styl';
    .alphabet
        display:flex
        position: absolute;
        top : 1.58rem
        right:0
        bottom:0
        width:.4rem
        flex-direction :column
        justify-content :center
        .item
            line-height:.34rem
            text-align :center
            color : $bgColor
</style>