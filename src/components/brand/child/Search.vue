
<template>
	<div>
	<div class="search">
		<input v-model="keyword" class="search-input border" type="text" placeholder="输入品牌" autofocus>
	</div>
	<div class="search-content" ref="search" v-show="keyword">
		<ul>
			
			<li class="search-item border-bottom" v-for="item in list" :key="item.id" 
			@click="handleBrandClick(item.name_chinese)">
				{{item.name_chinese}}
			</li>
			
			<li class="search-item border-bottom" v-show="!list.length">没有找到匹配数据</li>
		</ul>
	</div>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'BrandSearch',
  props: {
  	brands:Object
  },
  data () {
  	return {
  		keyword:'',
  		list:[]
  		
  	}
  },

  watch: {
  	keyword () {
  		const result = [] 
  		if(!this.keyword){
  			this.list = []
  			return;
  		}
  		for(let i in this.brands) {
  			this.brands[i].forEach( (value) => {
  				if(value.name_english.indexOf(this.keyword) > -1 || 
  					value.name_chinese.indexOf(this.keyword) > -1) {
  					result.push(value)
  				}

  			})
  		}

  		this.list = result
  	}
  },
   methods:{
  	
  	handleBrandClick (brand) {

  		this.$store.dispatch('changeBrand', brand)
  		this.keyword = brand
  		this.$router.push('/')

  	}
  },
  mounted () {
  	this.scroll = new Bscroll(this.$refs.search)
  }
  
}
</script>

<style scoped>
.search{
	height:.72rem;
	padding:0.1rem;
	background:#000;
}
.search-input{
	width:100%;
	height:.62rem;
	line-height:.62rem;
	text-align:center;
	border-radius:.06rem;
	box-sizing:border-box;
}
.search-content{
	position:absolute;
	top: 1.78rem;
	left:0;
	right:0;
	bottom:0;
	overflow:hidden;
	z-index:1;
	background:#ccc;

}
.search-item{
	line-height: .62rem;
	padding-left: .2rem;
	color:#666;
	background:#fff;
}		
</style>