<template>
<div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities ='cities' :hotCities='hotCities'></city-list>
    <city-alphabet :cities ='cities'></city-alphabet>
</div>
</template>
<script>
import cityHeader from './components/header.vue'
import citySearch from './components/search.vue'
import cityList from './components/list.vue'
import cityAlphabet from './components/alphabet.vue'
import axios from 'axios'
export default {
    name : 'city' , 
    components : {
        cityHeader , 
        citySearch ,
        cityList , 
        cityAlphabet
    } , 
    data(){
        return {
            cities:{} , 
            hotCities : []
        }
    },
    methods:{
        getCityInfo(){
            axios.get('/api/city.json')
                .then(this.handleGetcityInfo)
        } , 
        handleGetcityInfo(res){
            res = res.data
            console.log(res)
            if(res.ret && res.data){
                const data = res.data
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
        }
    },
    mounted(){
        this.getCityInfo()
        
    }
}
</script>
<style scoped lang="stylus">

</style>