import Home from "./components/Home"
import Menu from "./components/Menu"
import About from "./components/about/About"
import Admin from "./components/Admin"
import Login from "./components/Login"
import Register from "./components/Register"
import detailed from "./components/detailed"

//二级路由
import Contact from "./components/about/Contact"
import Delivery from "./components/about/Delivery"
import History from "./components/about/History"
import OrderingGuide from "./components/about/OrderingGuide"

//三级路由
import Phone from "./components/about/contact/Phone"
import PersonName from "./components/about/contact/PersonName"


export const routes = [
	{path:"/",name:"homeLink",components:{
		default:Home,
		"orderingGuide":OrderingGuide,
		"delivery":Delivery,
		"history":History
	}},
	/*beforeEnter(to,trom,next)(路由独享守卫*/
	{path:"/Menu",name:"linkMenu",component:Menu/*,beforeEnter:(to,trom,next)=>{
		//alert("非登陆状态不能访问");
		//有next()方法才能访问
		//next();
		//判断store.gettes.isLogin===false
		if(to.path=="/Login"||to.path=="/Register"){
			next();
		}else{
			alert("还未登陆，请先登陆");
			next("/Login");
		}
	}*/},
	{path:"/about/About",/*redirect:to=>{return "/history"},*/component:About,children:[
		{path:"/about/contact",name:"contact",redirect:"/phone",component:Contact,children:[
			{path:"/phone",name:"phone",component:Phone},
			{path:"/personName",name:"personName",component:PersonName}
		]},
		{path:"/delivery",name:"delivery",component:Delivery},
		{path:"/history",name:"history",component:History},
		{path:"/orderingGuide",name:"orderingGuide",component:OrderingGuide}
	]},
	{path:"/Admin",name:"Admin",component:Admin},
	{path:"/Login",component:Login},
	{path:"/Register",component:Register},
	{path:"/detailed/:id",component:detailed},
	{path:"*",redirect:"/"}
]



//全局守卫
/*
	to进入到那个路由
	from从哪个路由离开
	next函数
*/
/*router.beforeEach((to,from,next)=>{
	//alert("还未登陆，请先登陆");
	//next();
	//判断store.gettes.isLogin===false
	if(to.path=="/Login"||to.path=="/Register"){
		next();
	}else{
		alert("还未登陆，请先登陆");
		next("/Login");
	}
});*/


/*后置钩子
	to进入到那个路由
	from从哪个路由离开
*/
/*router.afterEach((to,from)=>{
	alert("pppp");
});*/


