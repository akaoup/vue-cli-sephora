
<template>
<div>
	<home-header></home-header>
	<home-swiper :bannerlist="bannerlist"></home-swiper>
	<home-iconbar :iconlist="iconlist"></home-iconbar>
	<home-topic :topiclist="topiclist" ></home-topic>
	
</div>
</template>

<script>
import HomeHeader from './child/Header'
import HomeSwiper from './child/Swiper'
import HomeIconbar from './child/Iconbar'
import HomeTopic from './child/Topic'
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      
      bannerlist: [],
      iconlist:[],
      topiclist:[],
      
    }
  },
  components:{
  	HomeHeader,
  	HomeSwiper,
  	HomeIconbar,
  	HomeTopic
  },
  methods: {
  	getHomeInfo () {
  		axios.get('/static/mock/index.json')
  			.then(this.getCityInfo)
  	},
  	getCityInfo (res) {
  		//console.log(res)
  		res = res.data
  		if (res.ret && res.data){
  			const data = res.data
  			
  			this.bannerlist = data.swiperList
  			this.iconlist = data.iconList
  			this.topiclist = data.topicList
  			
  			
  		}
  	}
  },
  mounted () {
  	this.getHomeInfo()
  }
}
</script>

<style scoped>
html,body {
    font-size : 10px;
}


</style>