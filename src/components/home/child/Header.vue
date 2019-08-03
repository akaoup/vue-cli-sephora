
<template>
	<div class="header">
		<div class="header-left">
			登录
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe64d;</span>
			彩妆礼遇
		</div>
		<router-link to="/brand">
			<div class="header-right">
				{{this.$store.state.brand}}
				<span class="iconfont">&#xe6aa;</span>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
  	brand: String
  }
  
}
</script>

<style scoped>
.header{
	display: flex;
	line-height: .86rem;
	background: #000;
	color: #fff;
}
	
.header-left{
	width: .64rem;
	float: left;
	text-align: center;
	padding-left: 0.18rem;
}
	
.header-input{
	flex: 1;
	padding-left: .2rem;
	height: .64rem;
	line-height: .64rem;
	margin-left: .2rem;
	margin-top: .12rem;
	background: #fff;
	border-radius: .1rem;
	color: #ccc;
}	
.header-right{
	min-width: 1.24rem; 
	padding:0 .1rem;
	float: right;
	text-align: center;
	color:#fff
}
		
</style>