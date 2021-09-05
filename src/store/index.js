import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Box 指的是任务栏弹出的各种功能小组件
    nowBox:"",
    showBox:"",
    zIndex: 0,
    openApps: [],
    focusApp: 0
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
    },
    changeOpenApps(state,app){
        state.openApps = app
    },
    changeFocusApp(state,app){
      state.focusApp = app
    }
  },
  actions: {
  },
  modules: {
  }
})
