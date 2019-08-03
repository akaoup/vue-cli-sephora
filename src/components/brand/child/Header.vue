
<template>
	<div class="header">
		<router-link to="/">
			<div class="iconfont headerback">&#xe601;</div>
		</router-link>
		品牌选择
	</div>
</template>

<script>
export default {
  name: 'BrandHeader',
  
  
}
</script>

<style scoped>
.header{
	position:relative;
	overflow:hidden;
	height:.86rem;
	line-height:.86rem;
	text-align:center;
	color:#fff;
	background:#000;
	font-size: .32rem;
}
.headerback{
	position:absolute;
	top:0;
	left:.1rem;
	width:.64rem;
	text-align:center;
	font-size:.4rem;
	color:#fff

}
		
</style>