<template>
    <ul class="alphabet">
        <li class="item">A</li>
        <li class="item">B</li>
        <li class="item">C</li>
        <li class="item">D</li>
        <li class="item">E</li>
        <li class="item">F</li>
        <li class="item">G</li>
        <li class="item">H</li>
        <li class="item">I</li>
        <li class="item">J</li>
    </ul>
</template>
<script>
export default {
    name : 'cityAlphabet'
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
            line-height:.44rem
            text-align :center
            color : $bgColor
</style>