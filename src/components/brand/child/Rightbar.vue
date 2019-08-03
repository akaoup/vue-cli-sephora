
<template>

	<ul class="list">
		<li v-for="item in letters" :key="item" :ref="item"
		@click="handleLetterClick" 
		@touchstart="handleTouchStart"
		@touchmove="handleTouchMove"
		@touchend="handleTouchEnd"
		>
			{{item}}
		</li>
		
	</ul>
</template>

<script>
export default {
  name: 'RightBar',
  props:{
  	brands:Object
  },
  computed: {
  	letters(){
  		const letters = []
  		for (let i in this.brands){
  			letters.push(i)
  		}
  		return letters
  	}
  },
  data () {
  	return {
  		touchStatus: false,
  		timer: null,
  		startY: 0
  	}
  },
  updated () {
  	this.startY = this.$refs['A'][0].offsetTop
  },
  
  methods:{
  	handleLetterClick (e) {
  		
  		this.$emit('change', e.target.innerText)
  	},
  	handleTouchStart () {
  		this.touchStatus = true
  	},
  	handleTouchMove (e) {
  		if(this.touchStatus){
  			if(this.timer){
  				clearTimeout(this.timer)
  			}
  			this.timer = setTimeout( () => {
  				
	  			//TOUCH目标到顶部的距离 - 头部高度
	  			const touchY = e.touches[0].clientY - 89
	  			const index = Math.floor((touchY - this.startY) / 20)
	  			console.log(index)
	  			if(index >= 0 && index < this.letters.length){
	  				this.$emit('change', this.letters[index])
	  			}
  			},16)
  			
  			
  		}
  	},
  	handleTouchEnd () {
  		this.touchStatus = false
  	}
  }
  
}
</script>

<style scoped>
.list{
	display:flex;
	flex-direction: column;
	justify-content: center;
	position:absolute;
	top: 1.78rem;
	right: 0;
	bottom: 0;
	width: .4rem;
	background: rgba(0, 0, 0, 0.1);
}
.list li{
	line-height: .44rem;
	text-align: center;
	color:#000;
}
</style>