<template>
	<div>
	<div>	
		<div class="banner" @click="handleShowGallary">
			<img class="banner-img" src="https://ssl2.sephorastatic.cn/products/3/8/8/6/0/0/1_n_06513_640x640.jpg">
			
		</div>
		<div class="banner-info">
			<div class="info-title">{{detailtitle}} </div>
			<div class="info-brand">{{detailbrand}} </div>
			<div class="info-des">{{detaildes}}</div>
			<div class="info-price">
				<span class="price-one"><em>￥</em>590</span>
			</div>
		</div>
		<div class="goods-promotion">
			<em class="promotion-logo"></em>
			<span>促销详情</span>
			<em class="iconfont promotion-arrow">&#xe602;</em>
		</div>
		
	</div>
	<common-gallary :imgs="detailimgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
	</div>
</template>

<script>

import CommonGallary from 'common/gallary/Gallary'

export default {
	name : 'ProBanner',
	props: {
		detailtitle:String,
		detailbrand:String,
		detaildes:String,
		detailimgs:Array
	},
	data () {
		return {

			showGallary: false,
			
		}
	},
	components:{
		CommonGallary
	},
	methods: {
		handleShowGallary () {
			this.showGallary = true
		},
		handleGallaryClose () {
			this.showGallary = false
		}
	}
}

</script>

<style scoped>

.banner{
	width:100%;
	overflow:hidden;
	height:0;
	padding-bottom: 100%;
	background: #fff;
}
.banner img{
	width:100%;
}
.banner-info{
    padding: 0 .24rem;
    padding-top: .28rem;
    padding-bottom: .2rem;
    overflow: hidden;
    background: #fff;
}
.info-title{
	font-size: .32rem;
    color: #000;
    line-height: .44rem;
}
.info-brand{
	font-size: .28rem;
    color: #000;
    margin-top: .14rem;
    margin-bottom: .24rem;
}
.info-des{
	font-size: .24rem;
    color: #666;
    margin-bottom: .3rem;
    line-height: .3rem;
}
.info-price{
	height: .8rem;
	font-size: .3rem;    
    margin-right: .2rem;
       
}
.info-price em{
	font-size: .2rem;
}
.goods-promotion{
	height: .72rem;
	line-height: .72rem;
    padding: 0 .24rem;
    margin: .2rem 0;
    background: #fff;
}
.goods-promotion span{
	margin-top: .2rem;
    font-family: SourceHanSansCN-Light;
    font-size: .3rem;
    color: #000;
    margin-left: .24rem;
    margin-right: .2rem;
}
.promotion-logo{
	width: 9px;
    height: 13px;
    background: url(https://m.sephora.cn/soa/bundle/promotion.png);
    background-repeat: no-repeat;
    display: inline-block;
    background-size: cover;
   
}
.promotion-arrow{
	float: right;
    color: #ccc;
    font-size: 14px;
}
.banner-next{
	height:500px;
	background:#fff;
}
</style>