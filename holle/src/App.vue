<template>
  <div id="app">
    <div class="box">
      <router-view/>
    </div>
    <div class="footer">
       <ul>
            <router-link to="/home" tag="li">配送到家</router-link>
            <router-link to="/fenlei" tag="li">分类</router-link>
            <router-link to="/vip" tag="li">会员</router-link>
            <router-link to="/shop" tag="li">购物车</router-link>
            <router-link to="/my" tag="li">我的</router-link>
       </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,html{
  width: 100%;
  height: 100%;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #dbdee0;
}
.box{
  width: 100%;
  flex: 1;
  overflow: hidden;
}
.footer{
    width: 100%;
    height: 60px;
    background: #fff;
}
.footer ul{
    width: 100%;
    height: 100%;
    display: flex;
}
.footer ul li{
    flex: 1;
    text-align: center;
    line-height: 60px;
}
</style>
