import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 整合vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// 字体图标
import './style/iconfont.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
