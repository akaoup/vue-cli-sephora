<template>
	<div>
		<div class="topic-floor" v-for="item in topiclist" :key="item.top.id">
			<a class="topic-img" href="javascript:void(0);">
				<img class="img" :src="item.top.imgUrl">	
			</a>
			<div class="topic-des">
				<a class="des-title" href="javascript:void(0);">{{item.top.desTitle}}</a>
				<a class="des-des" href="javascript:void(0);">{{item.top.desDes}}</a>
			</div>
			<div class="topic-prolist-swiper">
			<swiper :options="swiperOption">
				
				<swiper-slide class="prolist-box" v-for="pros in item.bottom" :key="pros.skuId">
					<router-link tag="a" :to="'/detail/'+ pros.skuProductID" >
						<div class="pro-pic">
							<img class="pic-img" :src="pros.skuPic2">
						</div>
						<div class="pro-brand">{{pros.skuBrand}}</div>
						<div class="pro-name">{{pros.skuName}}</div>
						<div class="pro-price">{{pros.offerPrice}}</div>
					</router-link>
				</swiper-slide>
				<div class="swiper-scrollbar" slot="scrollbar"></div>
				
			</swiper>
			
			</div>
		</div>
	
	</div>
</template>



<script>
import axios from 'axios'
export default {
	name:'HomeTopic',
	props:{
		topiclist: Array,
		topicpros: Object
	},
	data(){
		return {
			swiperOption: {
				direction : 'horizontal',
				slidesPerView : 3.8,
				slidesOffsetBefore : 10,
				slidesOffsetAfter : 60,
				autoplay:false,
				scrollbar: '.swiper-scrollbar',
				mousewheel: true
			}
		}
	}
	
   
}

</script>

<style scoped>
.topic-prolist-swiper >>> .swiper-scrollbar{
	background: rgba(204, 204, 204, 0.1);
	bottom: -6px;
	height: 3px;
	
}
.swiper-scrollbar-drag{
	background:rgba(204, 204, 204, 0.5);
}
.topic-prolist-swiper >>> .swiper-container{
	overflow: inherit;
}
.topic-floor{
	width:100%;
	height:auto;
}
.topic-img{
	display:block;
	width:100%;
	height:0;
	overflow:hidden;
	padding-bottom:56%;
	
}

.topic-img img{
	width:100%;

}
.topic-des{
	width:100%;
	height:auto;
}
.des-title,.des-des{
	display:block;
	color:#000;
}	
.des-title{
	height: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .4rem;
    font-weight: 500;
    line-height: .5rem;
    -webkit-line-clamp: 1;
    margin: .45rem 0 .3rem .4rem;
    -webkit-box-orient: vertical;
}
.des-des{
	width: 95%;
    margin: 0 0 .1rem .4rem;
    font-size: .28rem;
    font-family: PingFangSC-Light;
    font-weight: 300;
    line-height: .36rem;
    -webkit-line-clamp: 2;
}
.topic-prolist-swiper{
    height: 177px;
    width:100%;
    margin: 0 0 .5rem;
    
}
.prolist-box{
	
    height: auto;
    width: 2.1rem;
    margin: 0 0 0 .1rem;
}
.pro-pic{
	height: 2.1rem;
    width: 2.1rem;
    margin: 0 0 .1rem;
}
.pro-pic img{
	width:100%;
	height:100%;
}
.pro-brand{
	height: .2rem;
    width: 2.1rem;
    margin: 0 0 .1rem;
    font-size: .2rem;
    font-family: SFProText-Light;
    font-weight: 300;
    color: #000;
    line-height: .2rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}
.pro-name{
	height: .6rem;
    width: 2.1rem;
    margin: 0 0 .2rem;
    font-size: .24rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #000;
    line-height: .3rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.pro-price{
	height: .24rem;
    width: 2.1rem;
    display: block;
    text-align: center;
    font-size: .24rem;
    font-family: SFProText-Light;
    font-weight: 300;
    color: #000;
    line-height: .24rem;
}
</style>