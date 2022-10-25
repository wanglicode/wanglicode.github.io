import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './permission'

// 整合vant
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
import './assets/icons' // icon
// 字体图标
import './style/iconfont.css'
import com from './components'
Vue.use(com)

// 自动计算htmlfontsize
import 'amfe-flexible'
Vue.config.productionTip = false

Vue.use(ElementUI)

import Vue2OrgTree from 'vue2-org-tree'
import 'vue2-org-tree/dist/style.css'

Vue.use(Vue2OrgTree)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
