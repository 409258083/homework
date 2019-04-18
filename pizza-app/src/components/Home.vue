<template>
	<div id="home">
		<div class="homeMain" v-for="item in infoData" :key="item.id">
			<div class="h_title">
				<router-link v-bind:to="'/detailed/' + item.id">{{item.id+1}}.{{item.title}}</router-link>	
			</div>
			<div class="h_content">{{item.text}}</div>
			<div class="h_bct">
				<ul>
					<li class="h_browse">阅读:{{item.browse}}</li>
					<li class="h_comment">评论：{{item.comment}}</li>
					<li class="h_time">时间：{{item.time}}</li>
				</ul>
			</div>
		</div>
			
		
		<!-- <button @click="goToUp" class="btn btn-success">返回上一页面</button> -->
	</div>
	
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				infoData:{}
			}
		},
		methods:{
			goToUp(){
				//跳转上次浏览的页面
				//this.$router.go(-1);

				//制定跳转的地址
				//this.$router.replace("/menu");

				//制定跳转路由名字下
				//this.$router.replace({name:"linkMenu"});

				//通过push进行跳转
				//this.$router.push("/menu");
				//this.$router.push({name:"linkMenu"});

			},
		  	userJson(){
		  		this.$ajax.get("/homeData.json").then((data)=>{
					this.infoData=data.data;
		  		})
		  	}

		},
		created(){
			this.userJson();
		}
		
	}
</script>

<style scoped>
	#home .homeMain{
		background-color: #fff;
		padding:12px 15px 0;
		border-bottom: 1px solid #ccc;
	}

	.homeMain:hover{
		background-color:#ccc !important;
	}
	
	#home .homeMain .h_title{
		
		font-weight: bold;
		font-size: 24px;
	}
	#home .homeMain .h_content{
		color: #666;
		padding: 10px 0;
		font-size: 16px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	a{
		color: #333;
		text-decoration: none;
	}
	#home .h_bct ul{
		display: flex;
		color: #999;
		list-style-type: none;
	}
	#home .h_browse{	
		flex:1;
	}

	#home .h_comment{
		flex:1;
	}

	#home .h_time{		
		flex:5;
		text-align: right;
	}
</style>
