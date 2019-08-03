<template>
	<div>
		<brand-header></brand-header>
		<brand-search :brands="brands"></brand-search>
		<brand-list :brands="brands" :hotbrands="hotbrands" :letter="letter"></brand-list>
		<right-bar :brands="brands" @change="handleLetterChange"></right-bar>
	</div>
	
</template>

<script>
import axios from 'axios'
import BrandHeader from './child/Header'
import BrandSearch from './child/Search'
import BrandList from './child/List'
import RightBar from './child/Rightbar'

export default {
	name: 'Brand',
	components: {
		BrandHeader,
		BrandSearch,
		BrandList,
		RightBar
	},
	data () {
		return {
			brands: {},
			hotbrands: [],
			letter:''
		}
	},
	methods: {
		getBrandsInfo(){
			axios.get('/static/mock/brand.json')
				.then(this.handleBrandsInfo)
		},
		handleBrandsInfo (res) {
			console.log(res)
			res = res.data
			
			if(res.ret && res.data){
				const data = res.data
				this.brands = data.brands
				this.hotbrands = data.hotbrands
			}
		},
		handleLetterChange (letter) {
			this.letter = letter
			//console.log(letter)
		}
	},
	mounted(){
		this.getBrandsInfo()
	}
}

</script>

<style scoped>
	
</style>
