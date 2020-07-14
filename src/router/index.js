//配置路由相关信息
import VueRouter from "vue-router";
import Vue from "vue";
import home from '../page/home/home';


//通过Vue.use(插件)，安装插件
Vue.use(VueRouter);


//创建VueRouter对象
const routes=[
{
    //进入页面默认加载
    path: "",
    //重定向
    redirect: "/home"
  },
  {
    path: "/home",
    component: home
  }
];


const router =new VueRouter({
  routes,
  mode: "history"
});


//将router对象传入Vue实例
export default router;

