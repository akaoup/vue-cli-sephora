<template>
	<div>
		<div v-show="showtitlebox">
			<router-link to="/">
			<div class="header iconfont headerback">&#xe601;</div>
			<div class="header iconfont mybeg">&#xe61c;</div>
			</router-link>
		</div>

		<div class="header header-fixed" v-show="!showtitlebox" :style="opacityStyle">
			<router-link to="/">
			<div class="iconfont headerback">&#xe601;</div>
			</router-link>
			商品详情
		</div>
		
		
	</div>
</template>

<script>
export default {
	name : 'DetailHeader',
	data () {
		return {
			showtitlebox: true,
			opacityStyle: 0
		}
	},
	methods: {
		handleScroll () {
			const top = document.documentElement.scrollTop
			if(top > 60) {
				var opacity = top / 140
				opacity = opacity > 1 ? 1 :opacity
				this.opacityStyle = {
					opacity
				}
				this.showtitlebox = false

			}else{
				this.showtitlebox = true
			}
		}
	},
	activated () {
		window.addEventListener('scroll', this.handleScroll)
	},
	deactivated () {
		window.removeEventListener('scroll', this.handleScroll)
	}
}
</script>

<style scoped>
.header{
	width:100%;
	position:relative;
	overflow:hidden;
	height:.86rem;
	line-height:.86rem;
	text-align:center;
	background:#fff;
	font-size: .32rem;
}
.mybeg{
	position:absolute;
	top:0;
	right:.3rem;
	width:.64rem;
	text-align:center;
	font-size:.5rem;
	color:#000;
}
.headerback{
	position:absolute;
	top:0;
	left:.1rem;
	width:.64rem;
	text-align:center;
	font-size:.4rem;
	color:#000;

}
.header-fixed{
	background: #000;
	color: #fff;
	position:fixed;
	top:0;
	width:100%;
	
}
.header-fixed .headerback{
	color:#fff;
}
</style>