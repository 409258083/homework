<template>
	<div class="card text-dark bg-light mb-3">
		<div class="card">联系我们</div>
		<div class="card-body">
			<h4 class="card-title">联系我们</h4>
			<p class="card-text">www.baidu.com</p>

			<router-link :to="{name:'phone'}">电话</router-link>
			<router-link :to="{name:'personName'}">联系人</router-link>
			<router-view></router-view>
		</div>
	</div>
</template>