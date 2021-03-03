export default{
    changeCity(state,city){
        state.city = city
        //数据联动
        try{
            localStorage.city = city
        }catch(e){
        }
    }
}