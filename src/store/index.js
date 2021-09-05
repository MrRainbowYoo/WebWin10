import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nowBox:"",
    showBox:"",
    zIndex: 0
  },
  mutations: {
    changeNowBox(state,nowBox){
      state.nowBox = nowBox
    },
    changeShowBox(state,name){
      state.showBox = name
    },
    changeZIndex(state){
      state.zIndex ++
    }
  },
  actions: {
  },
  modules: {
  }
})
