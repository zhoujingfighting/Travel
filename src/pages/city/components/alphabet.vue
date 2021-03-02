<template>
    <ul class="alphabet">
        <li class="item" v-for="(item , key) of letters" :key="key"
        :ref="item"
        @click='handleletterClick'
        @touchstart = 'handleTouchStart'
        @touchmove = 'handleTouchMove'
        @touchend = 'handleTouchEnd'
        >{{ item }}</li>
        <!-- 兄弟组件的传值 ,子组件触发事件 ,触发start然后才能出发move-->
    </ul>
</template>
<script>
export default {
    name : 'cityAlphabet' , 
    data(){
        return {
            colorArray : {} , 
            touchStatus : false , 
            //当触屏事件的时候
            startY : 0,
            timer : null
            //节流用
        }
    },
    props : {
        cities :Object
        //父组件传下来的
    } , 
    updated(){
        this.startY = this.$refs['A'][0].offsetTop
    } , 
    //生命周期函数
    //move的时候还得节流
    methods:{
        handleletterClick(e){
            this.$emit('change' , e.target.innerText)
            if(!this.colorArray.item){
                e.target.style = "color:red"
                this.colorArray.item = e.target
                this.colorArray.color = 'red'
            }else{
                this.colorArray.item.style = "color:''"
                this.colorArray.item = e.target
                this.colorArray.color = 'red'
                this.colorArray.item.style = "color:red"
            }
        } , 
        handleTouchStart(){
            this.touchStatus = true
        } , 
        handleTouchMove(e){
            this.colorArray.item.style = "color:''"
            if(this.touchStatus){
                //当你滑动的时候,知道字母在哪儿
                //算与顶部位置的差值
                //颜色也应该改一下
                //字母A与顶部的距离
                // console.log(startY)
                //触屏事件节流
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() =>{
                    const touchY = e.touches[0].clientY
                // console.log(touchY)A
                const index = Math.floor ( (touchY - this.startY) / 20 )
                // 因为高度是.4rem
                //字母高度20px
                if(index >= 0 && index <= this.letters.length){
                    this.$emit('change' , this.letters[index - 4])
                    //向外触发change
                }
                } ,16)
            }
        } , 
        handleTouchEnd(){
            this.touchStatus = false
            //结束滑动,直接归位
        } , 
    },
    computed:{
        letters(){
            const letters = []
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
            // ["a"]
        }
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
            line-height:.4rem
            text-align :center
            color : $bgColor
</style>