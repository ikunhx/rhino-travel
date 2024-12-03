<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246);">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo aside-menu"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <!-- 切换按钮 -->
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;" >
        <el-radio-button :label="false" v-show="isCollapse"
          >|||</el-radio-button
        >
        <el-radio-button :label="true" v-show="!isCollapse"
          >||</el-radio-button
        >
      </el-radio-group>
      <!-- 导航列表 -->
      <el-menu-item index="aside.id" @click="handelClick(aside)" v-for="aside in asideList" :key="aside.id">
          <i class="iconfont" :class="aside.icon" :label="false" style="color: #FF6347;"></i>
        <span slot="title">{{ aside.title }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "Aside",
  data() {
    // 导航列表
    const asideList = [
      { id: 1, title: "酒店", icon: "icon-jiudian",show:'handelHotel',name:'hotel' },
      { id: 3, title: "火车票", icon: "icon-huochepiao",show:'handelTrain',name:'train' },
      { id: 4, title: "汽车票", icon: "icon-qichepiao" ,show:'handelCar',name:'car'},
      { id: 5, title: "飞机票", icon: "icon-guoneijipiao" ,show:'handelPlane',name:'plane'},
      { id: 6, title: "我的订单", icon: "icon-dingdan-quanbudingdan" ,show:'handelOrder',name:'order'},
    ];
    return {
      isCollapse: true,
      asideList,
      
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 点击导航事件
    handelClick(aside){
      this[aside.show](aside) 
    },
    // 传递路由跳转路径
    handelHotel(aside){
      this.$bus.$emit("h-hotel",aside.name)
    },
    handelCar(aside){
      this.$bus.$emit("h-car",aside.name)
    },
    handelPlane(aside){
      this.$bus.$emit("h-plane",aside.name)
    },
    handelTrain(aside){
      this.$bus.$emit("h-train",aside.name)
    },
    handelOrder(aside){
      this.$bus.$emit("h-order",aside.name)
    },
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.aside-menu {
    height: 100vh;
    position: fixed;
    left: 0;
}

.aside-menu i {
    font-size: 1.5em;
    margin-right: 5px;
    transition: transform 0.3s ease;

}

.aside-menu .el-radio-button__inner {
    width: 64px;
}

</style>