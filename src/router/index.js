import Vue from 'vue';
import VueRouter from "vue-router";
import Hotel from "../pages/hotel/Hotel.vue"
import Car from "../pages/car/Car.vue"
import Plane from "../pages/plane/Plane.vue"
import Train from "../pages/train/Train.vue"
import Order from "../pages/order/Order.vue"
Vue.use(VueRouter);
const router = new VueRouter({
    routes:[
        {
            path: '/',
            component:Hotel, //重定向到 /hotel
        },
        {
            path: '/hotel',
            name: 'hotel',
            component:Hotel,
        },
        {
            path: '/car',
            name: 'car',
            component: Car,
        },
        {
            path: '/plane',
            name: 'plane',
            component: Plane,
        },
       
        {
            path: '/train',
            name: 'train',
            component: Train,
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
        },
        
    ]
})

export default router;