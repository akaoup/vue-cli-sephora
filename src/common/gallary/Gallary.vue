<template>
	<div class="container" @click="handleGallaryClick">
		<div class="wrapper">
			<swiper :options="swiperOption">
	    	<!-- slides -->
		    <swiper-slide v-for="(item,index) in imgs" :key="index">
		    	<img :src="item">
		    </swiper-slide>  	   
	    
	    	<!-- Optional controls -->
	    	<div class="swiper-pagination"  slot="pagination"></div>
	 
  			</swiper>
		</div>
	</div>
	
</template>

<script>

export default {
	name : 'CommonGallary',
	
	props: {
		imgs: {
			type: Array
		}
	},
	data () {
		return {
			swiperOption: {
				pagination : '.swiper-pagination',
				paginationType : 'fraction',
				observer:true,
				 observeParents:true,
			}
		}
	},
	methods: {
		handleGallaryClick () {
			this.$emit('close')
		}
	}
}

</script>

<style scoped>
.container >>> .swiper-container{
	overflow: inherit;
}
.container{
	display:flex;
	flex-direction: column;
	justify-content:center;
	z-index: 99;
	position:fixed;
	left:0;
	right:0;
	top:0;
	bottom:0;
	background:#000;
}
.wrapper{
	width:100%;
	
	height:0;
	padding-bottom:100%;
}
.wrapper img{
	width:100%;

}
.swiper-pagination{
	color:#fff;
	bottom: -50px;
}
</style>