<template>
    <div class="shop">
        <header>
            <h3>刘宇 13683599888</h3>
            <p>送至：北京八维教育软工学院 网站</p>
        </header>
        <div class="list">
           <div class="shop-list" v-for="(item) in shopList" 
           :key="item.id"
           >
               <input type="checkbox" name="" id="">
                <div class="left">
                    <h4>{{item.title}}</h4>
                    <p>￥{{item.price}}</p>
                </div>
                <div class="right">
                    <my-item :Item="item"/>
                </div>
           </div>
        </div>
    </div>
</template>
<script>
import myItem from '../../components/item'
import {mapState} from 'vuex'
export default {
    props:{

    },
    components:{
        myItem
    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState(['shopList'])
    },
    methods:{

    },
    created(){
        console.log(this.shopList)
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.shop{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
header{
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
}
.list{
    width: 100%;
    flex: 1;
}
.shop-list{
    width: 100%;
    height: 60px;
    display: flex;
    border-top: 1px solid #ccc;
    background: #fff;
}
.shop-list input{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin:15px;
}
.shop-list .right{
    width: 30%;
    height: 100%;
}
.shop-list .left{
    height: 100%;
    flex: 1;
}
</style>