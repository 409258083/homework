<template>
	<header>
		<ul>
			<li v-for="(item,index) in arr" :key="index" >
				<router-link :to="item.path" exact active-class="active">{{ item.name}}</router-link>
				   <!--@click="btnCol(index)"  :class="isActive==index ? 'active router-link-active' : '' "-->
			</li>
		</ul>
	</header>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				linkHome:"/",
				//isActive:-1,
				arr:[{name:'主页',path:"/"},
				{name:'菜单',path:"/Menu"},
				{name:'管理',path:"/Admin"},
				{name:'关于我们',path:"/about/About"},
				{name:'登陆',path:"/Login"},
				{name:'注册',path:"/Register"}]
			}
		}
		/*,methods:{
			btnCol(index){
				if(index==3){
					this.isActive=index;
				}else{
					this.isActive=-1;
				}
			}
		}*/
	}
</script>
<style scoped>
	.active{
		 background-color: blue !important; 
		font-weight: bold;
		color: #fff;
		display: block;
	}
	ul{
		display: flex; 
		height:44px;
		line-height: 44px;
		background-color: #E91E63;		
	}
	
	ul li {
		flex:2;
		text-align: center; 
		list-style-type: none;
		color: #fff;
	}
	a{
		color: #fff;
		text-decoration: none;
	}
	
</style>
