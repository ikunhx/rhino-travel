<template>
  <!-- 总容器 -->
  <div
    class="container"
    style="height: 100vh; border: 1px solid #eee; display: flex"
  >
    <!-- 侧边栏 -->
    <Aside />
    <!-- 副容器 -->
    <div class="container2" style="width: 100%">
      <!-- 头部 -->
      <Head />
      <!-- 右边占位div -->
      <div
        style="
          background-color: rgb(238, 241, 246);
          height: 100vh;
          width: 200px;
          float: right;
        "
      ></div>
      <div
        class="container3"
        style="
          width: 80%;
          height: 88.5vh;
          margin-left: 50px;
          margin-top: 10px;
         
        "
      >
        <router-view></router-view>
     
      </div>
    </div>
  </div>
</template>

<script>
import Aside from "./components/Aside";
import Head from "./components/Head";
import Hotel from "./pages/hotel/Hotel.vue";
export default {
  name: "App",
  components: {
    Aside,
    Head,
    Hotel,
  },
  methods:{
    //接收跳转信息并跳转
    trainShow(name) {
      if(this.$route.path!=='/train'){
        this.$router.push({
          name: name,
        });
      }
    },
    carShow(name) {
      if(this.$route.path!=='/car'){
        this.$router.push({
          name: name,
        });
      }
    },
    planeShow(name) {
      if(this.$route.path!=='/plane'){
        this.$router.push({
          name: name,
        });
      }
    },
    orderShow(name) {
      if(this.$route.path!=='/order'){
        this.$router.push({
          name: name,
        });
      }
    },
    hotelShow(name) {
      
      if(this.$route.path!=='/hotel'&&this.$router.path!=='/'){
        console.log(name);
        
        this.$router.push({
          name: name,
        });
        console.log('####');
        
      }
      
    }
  },
  mounted() {
    // 监听跳转信息
    this.$bus.$on('h-hotel',this.hotelShow)
    this.$bus.$on('h-car',this.carShow)
    this.$bus.$on('h-plane',this.planeShow)
    this.$bus.$on('h-train',this.trainShow)
    this.$bus.$on('h-order',this.orderShow)
  },
};
</script>

<style>
* {
  margin: 0;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
</style>