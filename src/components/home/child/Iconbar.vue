<template>
	<div class="icon-bar">
		<div class="icons">
			<swiper :options="swiperOption">
				<swiper-slide v-for="(page,index) in pages" :key="index">
				<div class="icon" v-for="item in page" :key="item.id">
					<div class="icon-img"><img :src="item.imgUrl"></div>
					<p class="icon-dsc">{{item.des}}</p>
				</div>
				</swiper-slide>
			</swiper>	
			
		</div>
	</div>
</template>

<script>
export default {
  	name: 'HomeIconbar',
  	props:{
  		iconlist: Array
  	},
	data () {
		return{
			swiperOption:{
				
			}

		}
	},
	computed: {
		pages(){
			const pages =[]
			this.iconlist.forEach((item,index) => {
				const page = Math.floor(index / 10)
				if(!pages[page]){
					pages[page] = []
				}
				pages[page].push(item)
			})
			return pages
		}
	}


}
</script>

<style scoped>
/*silde css*/
.icons >>> .swiper-container{
	height:0;
	width:100%;
	padding-bottom:44%;
}

.icon-bar{
	height:0;
	width:100%;
	padding-bottom:50%;
	overflow: hidden;
}
.icons{
	height:0;
	width:90%;
	padding-bottom:40%;
	margin:0 auto;
	padding-top:5%	

}
.icon{
	overflow:hidden;
	height:0;
	width:20%;
	padding-bottom: 22%;
	float: left;
}
.icon-img{
	width:100%;
	padding-top:.1rem;
	text-align: center;
}
.icon-img img{
	width:60%;
}
.icon-dsc{
	width:100%;
	text-align:center;
	margin-top: .15rem;
	height:.22rem;
	line-height:.22rem;
	font-size:.18rem;
	color:#000;
	font-family: PingFangSC-Regular;
	overflow:hidden;
	white-space:nowrap;
	text-overflow:ellipsis;

}		

</style>