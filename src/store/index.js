import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultBrand = '丝芙兰'
try{
	if(localStorage.brand) {
		defaultBrand = localStorage.brand
	}
} catch (e) {}


export default new Vuex.Store({
	state: {
		brand: defaultBrand || '丝芙兰',
	},
	actions: {
		changeBrand (ctx,brand) {
			ctx.commit('changeBrand', brand)
		}
	},
	mutations: {
		changeBrand (state,brand) {
			state.brand = brand
			try {
				localStorage.brand = brand
			}catch (e) {}
			
		}

	}
})