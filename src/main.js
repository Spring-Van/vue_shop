import Vue from 'vue'
import App from './App.vue' // 导入App根组件
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/global.css' // 导入全局样式表
import './plugins/element.js' // 按需引入elementui

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
