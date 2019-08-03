
<template>

	<div class="city-list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前品牌</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{this.$store.state.brand}}</div>
					</div>
					
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门品牌</div>
				<div class="button-list">
					<div class="button-wrapper" v-for="item in hotbrands" :key="item.id" 
					@click="handleBrandClick(item.name_chinese)">
						<div class="button">{{item.name_chinese}}</div>
					</div>
					
				</div>	
			</div>
			<div class="area" v-for="(item,key) in brands" :key="key" :ref="key">
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div class="item" v-for="inneritem in item" :key="inneritem.id" 
					@click="handleBrandClick(inneritem.name_chinese)">
					{{inneritem.name_chinese}}
					</div>
					
				</div>

			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'BrandList',
  props:{
  	hotbrands:Array,
  	brands:Object,
  	letter:String
  },
  methods:{
  	
  	handleBrandClick (brand) {
  		
  		this.$store.dispatch('changeBrand', brand)
  		this.$router.push('/')
  	}
  },
  mounted () {
  	this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
  	letter () {
  		if(this.letter){
  			//获取的refs是个数组
  			//const element = this.$refs[this.letter]
  			const element = this.$refs[this.letter][0]
  			//betterscroll这个插件的scrollToElement方法需要dom结构
  			this.scroll.scrollToElement(element)
  			//console.log(element)
  		}
  	}
  }
   
  
}
</script>

<style scoped>
.city-list{
	font-size: .28rem;
	position: absolute;
	top:1.78rem;
	bottom:0;
	left:0;
	right:0;
	overflow:hidden;
}
.border-topbottom:after, .border-topbottom:before{
	border-color:#ccc;
}
.title{
	line-height: .4rem;
    background: #eee;
    padding-left: .2rem;
    color: #000;
    padding: .12rem;
}
.button-list{
	overflow:hidden;
	padding: .1rem .6rem .1rem .1rem;
}
.button-wrapper{
	float:left;
	width:25%;

}
.button{
	padding: .15rem 0;
	text-align:center;
	margin:.1rem;
	border: .02rem solid #666;
	border-radius:.06rem;
}
.item-list .item{
	padding-left: .2rem;
	line-height:.76rem;
	color:#000;
}
</style>