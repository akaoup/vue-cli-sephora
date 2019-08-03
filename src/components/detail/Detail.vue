<template>
	<div class="detailbox">
		<detail-header></detail-header>
		<pro-banner 
			:detailtitle="detailtitle"
			:detailbrand="detailbrand"
			:detaildes="detaildes"
			:detailimgs="detailimgs"
		></pro-banner>
		<div class="fixed-content"></div>
	</div>

</template>

<script>
import axios from 'axios'
import DetailHeader from './child/Header'
import ProBanner from './child/Probanner'

export default {
	name : 'Detail',
	data () {
		return {
			detailtitle: '',
			detailbrand: '',
			detaildes: '',
			detailimgs : []
		}
	},
	components: {
		DetailHeader,
		ProBanner
	},
	methods: {
		getDetailInfo () {
			axios.get('/static/mock/detail.json',{
				params: {
					op: this.$route.params.op
				}
			}).then(this.handleGetData)
		},
		handleGetData (res) {
			res = res.data
			if(res.ret && res.data) {
				const data = res.data
				this.detailtitle = data.infotitle
				this.detailbrand = data.infobrand
				this.detaildes = data.infodes
				this.detailimgs = data.infoimgs
			}
		}
	},
	mounted () {
		this.getDetailInfo()
	}
}

</script>

<style scoped>
.detailbox{
	background: #f5f5f5;
}
.fixed-content{
	height:500px;
	background: #fff;
}
</style>