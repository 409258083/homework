<template>
	<div id="home">
		<div class="homeMain">
			<div class="h_title">{{item.title}}</div>
			<div class="h_content">{{item.text}}</div>
			<div class="h_bct">
				<ul>
					<li class="h_browse">阅读:{{item.browse}}</li>
					<li class="h_comment">评论：{{item.comment}}</li>
					<li class="h_time">时间：{{item.time}}</li>
				</ul>
			</div>
		</div>
	</div>
	
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				id:this.$route.params.id,
				item:{}
			}
		},
		methods:{
		  	userJson(){
		  		this.$ajax.get("/homeData/"+ this.id +".json").then((data)=>{
					this.item=data.data;
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
		padding:20px 15px 15px;
		background-color: #eee;
	}

	#home .homeMain .h_title{
		
		font-weight: bold;
		font-size: 24px;
	}
	#home .homeMain .h_content{
		color: #666;
		padding: 10px 0;
		font-size: 16px;
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
