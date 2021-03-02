<template>
    <div>
        <div class="search">
          <input type="text" placeholder="输入城市名或拼音" class="searchinput" v-model="keyworld">  
        </div>
        <div class="search-content" ref="search" v-show="keyworld">
            <ul>
                <li class="search-item border-bottom" v-for="(item,index) of list" :key="index"> {{ item.name }}</li>
                <!-- 得实现滚动 -->
                 <li class="search-item border-bottom" v-show="list.length===0">  没有匹配数据 </li>
            </ul>
        </div> 
  
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
    name : 'citySearch' , 
    props:{
        cities : Object
    },
    data(){
        return {
            //要对搜索后的数据进行一个绑定
            keyworld : '' , 
            list : [] , 
            timer : null 
        }
    } , 
    watch :{
        keyworld(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyworld){
                this.list = []
                return
            }
            //没有匹配项
            this.timer = setTimeout( () => {
                const result = []
               for(let i in this.cities){
                   this.cities[i].forEach(value => {
                       if(value.spell.indexOf(this.keyworld) > -1 || value.name.indexOf(this.keyworld) > -1){
                           result.push(value)
                       }
                   });
               }
               this.list = result
            } , 100)
        }
    },
    //监听搜索城市的变化
    mounted(){
        this.scroll = new Bscroll(this.$refs.search)
    }
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
    .search-content
        z-index:1
        background: #eee;
        overflow :hidden
        position : absolute 
        top : 1.52rem;
        left : 0
        right : 0
        bottom : 0
        .search-item
            line-height: 0.62rem
            paddingleft : .2rem
            background : #fff

</style>