<template>
    <div class="wrap">
        
        <div class="top">
            <ul>
                <li :class="{'active':item.id==ind}" v-for="(item) in topList" :key="item.id" @click="top(item.id)">{{item.title}}</li>
            </ul>
        </div>
        <div class="section">
            <div class="list">
                <dl v-for="(item) in list" 
                :key="item.id"

                >
                    <dt>
                        <img :src="item.image" alt="">
                    </dt>
                    <dd>
                        <p>{{item.title}}</p>
                        <p>{{item.price}}</p>
                        <button @click="addbtn(item.id)">+</button>
                    </dd>
                </dl>
            </div>
        </div>

    </div>
</template>
<script>
import axios from 'axios'
import '../../mock/index'
import myItem from '../../components/item'
import BScroll from 'better-scroll'
import {mapState,mapActions,mapMutations} from 'vuex'

export default {
    props:{

    },
    components:{
     myItem
    },
    data(){
        return {
            topList:[
                {
                    title:'多点超市',
                    id:0
                },
                {
                    title:'全球精选',
                    id:1
                }
            ],
            ind:0
        }
    },
    computed:{
        ...mapState(["list"])
    },
    methods:{
        ...mapActions(['getList']),
        ...mapMutations(['shopList']),
        top(id){
            this.ind=id;
        },
        addbtn(id){
         
            this.shopList(id)
        }
    },
    created(){
      
        this.getList()
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
}
.top{
    width:100%;
    height: 50px;
    background: #fff;
    border-bottom: 1px solid #ccc;
}
.top ul{
    width: 100%;
    height: 100%;
    display: flex;
}
.top ul li{
    width: 100px;
    height: 100%;
    
}
.top ul .active{
    border-bottom: 2px solid orangered;
}
.section{
    width: 100%;
    flex: 1;
    overflow-y: auto;
}
.list{
    width:100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
}
.list dl{
    width: 30%;
    height: 150px;
  
    border-bottom: 1px solid #ccc;
    margin-top: 10px;
}
.list dl dt{
    width: 30%;
    height: 50%;
}
.list dl dt img{
    width: 100%;
    height: 100%;
}
.list dl dd{
    float: 1;
}
.list dl dd p{
    width: 100%;
    height: 20px;
    text-align: center;
    line-height: 20px;
}
</style>