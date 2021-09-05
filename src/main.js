import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/iconfont.css'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

// 禁用右键
document.oncontextmenu = function () {
  return false;
};

// 自定义拖拽指令
Vue.directive('drag', (el, bingding) => {
  Vue.nextTick(() => {
    let moveBox = el
    let moveTitle = el.querySelector('.winapp-header')
    let clientX, clientY
    let objX, objY

    moveTitle.onmousedown = (e) => {
      // 只允许左键
      if (e.button !== 0)
        return;

      objX = moveBox.offsetLeft
      objY = moveBox.offsetTop
      moveBox.style.transition = '0s'
      moveTitle.style.cursor = 'move'
      clientX = e.clientX
      clientY = e.clientY

      document.onmousemove = (event) => {
        // 边界判断
        if (moveBox.getBoundingClientRect().top <= 0) {
          moveBox.style.transition = '.2s'
          moveTitle.style.cursor = 'default'
          let boxIsMax = bingding.value.isMax
          if (boxIsMax)
            return;
          bingding.value.setMax('out')
          return;
        }
        moveBox.style.left = (event.clientX - clientX + objX) + 'px'
        moveBox.style.top = (event.clientY - clientY + objY) + 'px'
      }

      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
        moveTitle.style.cursor = 'default'
        moveBox.style.transition = '.2s'
      }
    }

  })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')