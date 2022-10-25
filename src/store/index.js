import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'


Vue.use(Vuex)

export default new Vuex.Store({
  // 类比于 data
  state: {
    food: '西兰花炒蛋!',
    vegetable: 'westblueflower'
  },
  // 修改数据的方法
  mutations: {
    CHANGEFOOD (state, newFood) {
      state.food = newFood
    },
    CHANGEVEGETABLE (state, newVegetable) {
      setTimeout(() => {
        state.vegetable = newVegetable
      }, 2000)
    }
  },
  // 内部支持异步操作 异步的逻辑写在这里
  // 数据的修改 还是调用mutations
  actions: {
    asyncChangeFood (context) {
      setTimeout(() => {
        // context 理解为 仓库对象
        context.commit('CHANGEFOOD', '西兰花炒西兰花')
      }, 2000)
    }
  },
  modules: {
    user
  }
})
