import vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
//不是要使用vuex,而是要使用vuex创建的一个仓库,导出模块
vue.use(Vuex)
export default new Vuex.Store({
    // 公用数据
    // actions:{
    //     changeCity(ctx , city){//借助ctx拿到commit
    //         ctx.commit('changeCity' , city)
    //     }
    //     //action 结束才能 commit
    // } , 
    state:state,
    mutations:mutations
})