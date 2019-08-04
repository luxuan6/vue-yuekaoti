<template>
    <div>
        <span @click="btn(Item.id,Item.count-1)">-</span>
        <span>{{Item.count}}</span>
        <span @click="btn(Item.id,Item.count+1)">+</span>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    props:{
        Item:Object
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
        ...mapMutations(['addCount']),
        btn(id,count){
            let data= {
                id,
                count
            }
            console.log(data)
            this.addCount({data})
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>