<template>
	<div class="container">
		<div class="center" :style="{height:getViewCenter}">
			<div class="center_left">
				<div class="center_left_up node_h">eeee{{getView}}</div>
				<div class="center_left_down node_h">wwww</div>
			</div>
			<div class="center_center">asdasd</div>
			<div class="center_right">
				<div class="center_right_up node_h" >qqqq</div>
				<div class="center_right_down node_h">rrrr</div>
			</div>
		</div> 
		<div id="footerId">
			aasasasasd
		</div>
	</div>
	<!-- <button @click="routerTo">点击获取路由参数</button> -->
</template>

<script type="text/javascript">
	export default{
		name:"muneTimes",
		data(){
			return {
				getView:"",
				nodeHeight:"",
				getViewCenter:""
			}
		},
		methods:{
		    routerTo(){
		   	    this.$router.push({ name:'Admin', params: { userId: 123 }});
		    },
		    getViewRegion(){
		    	const that = this;
		    	let getView=document.documentElement.clientHeight||document.body.clientHeight;
		    	let nodeHeight=getView/2;
		    	let getViewCenter=getView-44-100;
		    	this.getViewCenter=getViewCenter+"px";
		    	//this.nodeHeight=nodeHeight;
		    }
		},
		created(){
			this.getViewRegion();
		},
		mounted (){
			const that = this;
		    window.onresize = () => {
		      that.getViewRegion();
		    }
		}
	}
</script>
<style scoped>
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.center{
		display: flex;
		width: 100%;
		color:#fff;
	}

	.center_left{
		height:100%;
		flex:1;
	}

	.center_center{
		height:100%;
		flex:2;
		background-color: red;
		text-align: center;
	}

	.center_right{
		flex:1;
		height:100%;
	}

	.center_left_up,.center_right_up{
		height: 50%;
		width: 100%;
		text-align: center; 
		overflow-wrap: break-word;
		text-overflow: ellipsis;
		background-color: blue;
	}

	.center_left_down,.center_right_down{
		height: 50%;
		width: 100%;
		text-align: center; 
		overflow-wrap: break-word;
		text-overflow: ellipsis;
		background-color: #9C27B0;
	}
	
	#footerId{
		width: 100%;
		height: 100px;
		font-size: 22px;
		background-color: #4e4e4e;
		color:#fff;
		line-height: 100px;
		text-align: center;
	}
</style>
