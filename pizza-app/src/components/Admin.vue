<template>
	<div id="admin">
		<h1>admin{{id}}</h1>
		<button @click="canshu">点击</button>
		
	</div>
	

</template>

<script type="text/javascript">
	export default{
		name:"admin",
		data(){
			return {
				name:"丽水",
				id:""
			}
		},
		methods:{
			canshu:function(){  
				this.id=this.$route.params.userId
			}
		},
		/*beforeRouteEnter:(to,from,next)=>{
			//alert("sda"+this.name);
			next(function(vb){
				alert(vb.name);
			});
			//next(vm=>{
			//	alert(vm.name+"sksksk");
			//});
		}*/
		/*beforeRouteLeave (to, from, next) {
	   		// 导航离开该组件的对应路由时调用
	    	// 可以访问组件实例 `this`
	    	if(confirm("你确认离开吗？")==true){
	    		next();
	    	}else{
	    		next(false);
	    	}

	 	 } */
	}
</script>