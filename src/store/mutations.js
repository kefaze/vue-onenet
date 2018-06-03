import getters from './getters'

const state = {
	netResIsShow: true
}

const mutations = {
	netResIsShow () {
		state.netResIsShow = true;
	},
	netResIsHide () {
		state.netResIsShow = false;
	}
}
export default{
	state,
	mutations,
	getters
}