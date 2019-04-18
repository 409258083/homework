import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import {routes} from "./router"
import axios from "axios"


axios.defaults.baseURL = "https://wd3537894363btgosy.wilddogio.com/"
Vue.prototype.$ajax = axios;

/*import './assets/Iconfont/iconfont.js'
import "./assets/Iconfont/iconfont.css"*/

Vue.use(VueRouter)

const router = new VueRouter({
	linkActiveClass: 'active',
    /*linkExactActiveClass: 'active',*/
	routes,
	mode:"history",
	//记录或调整页面跳转返回后的位置
	scrollBehavior(to,from,savedPositin){
		//设置页面开始时的位置
		//return {x:0,y:100}
		//根据类class 定位到页面开始的位置,（只根据第一个类【btn】有效）
		//return {selector:".btn"}
		if(savedPositin){
			return savedPositin
		}else{
			return {x:0,y:0}
		}
	}
})



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
