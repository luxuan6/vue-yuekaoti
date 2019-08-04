
import axios from 'axios'
import '../mock/index'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [],
        flag: false,
        shopList:[],
        sum:0
        
    },
    mutations: {
        getlist(state, data) {
            state.list = data;
        },
        addCount(state,{data}){
            let {id,count} =data;
        let ind =state.shopList.findIndex(item=>item.id==id);
        if(count>0){
            state.shopList[ind].count=count
        }else{
            // console.log(1)
            state.shopList.splice(ind,1)
        }
        // this.commit('sumPrice',state.shopList)
        },
        // sumPrice(state,arr){
           
        //     let num =arr.reduce((prev,cur)=>{
        //         return prev +cur.count*cur.price
        //     })
        //     console.log(num)
        // },
        shopList(state,id){
            let ind = state.shopList.findIndex(item=>item.id==id)
            let index= state.list.findIndex(item=>item.id==id)
            if(ind==-1){
                state.shopList.push(state.list[index])
            }
            
          
            
        }
    },
    actions: {
        getList({commit}){
            axios.get('/api/list').then((res)=>{
                commit('getlist',res.data.list)
           })
       }
    },
    getters: {

    }
})