import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

export const router = new VueRouter({
    routes:[
        {
            path:'/',
            name: 'Home',
            component:()=>import('@/component/Home.vue')
        },
        {
            path:'/Favorite',
            name: 'Favorite',
            component:()=>import('@/pages/Favorite.vue')
        },
    ],
    mode: "history"
})
