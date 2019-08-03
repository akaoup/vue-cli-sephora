<template>
	
	<div class="swiper-wrapper">
		<swiper :options="swiperOption" v-if="showSwiper">
	    	<!-- slides -->
		    <swiper-slide v-for="item in bannerlist"  :key="item.id"><img class="swiper-img" :src="item.imgUrl">

		    </swiper-slide>	    
	    
	    	<!-- Optional controls -->
	    	<div class="swiper-pagination"  slot="pagination"></div>
	 		
  		</swiper>
	</div>
  	
</template>



<script>
export default {
	name:'HomeSwiper',
	props: {
		bannerlist: Array
	},
	data(){
		return{
			swiperOption:{
				pagination : '.swiper-pagination',
				autoplay: 2000,
				loop:true,
				
			}
		}
	},
	computed: {
		showSwiper (){
			return this.bannerlist.length
		}
	}
	
   
}

</script>

<style scoped>

.swiper-wrapper{
	width: 100%;
	height:0;
    padding-bottom: 90.6%;
    overflow: hidden;	
}
			
.swiper-wrapper .swiper-img{
	width:100%;
}
.swiper-wrapper .swiper-pagination{
	bottom: .1rem;
}	
.swiper-wrapper >>> .swiper-container{
	height:0;
    padding-bottom: 90.6%;
    overflow: hidden;
}

.swiper-wrapper >>> .swiper-pagination-bullet{
	margin: 0 5px;
    display: inline-block;
    width: .75rem;
    height: .04rem;
    background: #fff;
    border-radius: 1rem;
    opacity: .4;
    bottom: .16rem;
}		
.swiper-wrapper >>> .swiper-pagination-bullet-active{
	background: #fff;
	opacity: 1;
} 
			 
			
</style>