import Vue from 'vue'

//引入UI组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入更改后的主题
import '../theme/index.css'
//引入图标
import './assets/图标/iconfont.css'
//引入更改后的css
// import './assets/css/index.css'
import App from './App.vue'

//引入路由
import VueRouter from 'vue-router'
import router from './router'
//使用UI组件库
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false

//保存原来的push函数
const originalPush = VueRouter.prototype.push;
//重写push函数
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

// 引入axios


new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  router: router
});
