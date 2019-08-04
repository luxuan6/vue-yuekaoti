<template>
    <div class="footer">
       <ul>
            <router-link to="/home" tag="li">配送到家</router-link>
            <router-link to="/fenlei" tag="li">分类</router-link>
            <router-link to="/vip" tag="li">会员</router-link>
            <router-link to="/shop" tag="li">购物车</router-link>
            <router-link to="/my" tag="li">我的</router-link>
       </ul>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.footer{
    width: 100%;
    height: 60px;

}
.footer ul{
    width: 100%;
    height: 100%;
    display: flex;
}
.footer ul li{
    flex: 1;
}
</style>