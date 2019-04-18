<template>
	<div id="Login" :style="{height:imgHeight}">
		<div class="login_bor">
			<form id="from_submit">
				<div class="login_title">账户登录</div>
				<label>
					<input type="" name="" placeholder="请输入账户" v-model="userName">
				</label>
				<label>
					<input type="" name="" placeholder="请输入密码" v-model="userPswd">
				</label>
				<button>登录</button>
			</form>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				userName:"",
				userPswd:"",
				imgHeight:""
			}
		},
		methods:{
			getViewRegion(){
		    	const that = this;
		    	let getView=document.documentElement.clientHeight||document.body.clientHeight;
		    	let getViewCenter=getView-86;
		    	this.imgHeight=getViewCenter+"px";
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
	#Login{
		width: 100%;
		background-image: url(.././assets/logo3.jpg);
		background-repeat:no-repeat ;
		background-size:100% 100%;
		background-attachment: fixed;
		opacity: .7;
	}
	
	.login_bor{
		position: absolute;
		width: 300px;
		height: 250px;
		text-align: center;
		border: 1px solid #ccc;
		box-shadow: 0 0 20px #0b1117;
		margin:auto;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: #fff;
		overflow: hidden;
	}

	#Login #from_submit label{
		color: #333;
		display: block;
	}
	#from_submit .login_title{
		color: #323333;
		font-weight: bold;
		font-size: 18px;
		padding: 15px 0;
	}

	#from_submit input,
	#from_submit button{
		width: 180px;
		margin: 10px 0;
	}
	#from_submit button{
	    background: #2acfbb;
	    color: #fff;
	    height: 35px;
	    border-radius: 4px;
	    text-align: center;
	    line-height: 35px;
	    border: 0;
	}

</style>