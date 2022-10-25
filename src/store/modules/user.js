// import { getInfo, logout } from '@/api/user/index'
import { setToken, removeToken } from '@/utils/token'

const user = {
  state: {
    name: '王兄', // 用户名称,我暂时写死了有值
  },

  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    },
  },
  actions: {

    // 获得用户信息
    getInfo ({ commit }, token) {
      return new Promise((resolve, reject) => {
        // 我暂时注释掉了,因为上面那个接口我没写,防止报错,你自己写的时候放开
        // getInfo(token)
        //   .then(res => {
        //     if (res.code === 200) {
        //       commit('SET_NAME', res.data.userName)
        //       resolve(res)
        //     } else {
        //       reject(res.message)
        //     }
        //   })
        //   .catch(error => {
        //     reject(error)
        //   })
      })
    },

    // 用户登出
    logout ({ commit, state }) {
      removeToken()
      window.location.reload()

      // 下面是要调退出接口,有的项目要求,如果不调可以把这个写到mutations
      // return new Promise(resolve => {
      //   logout().then(res => {
      //     if (res.code === 200) {
      //       removeToken()
      //       resolve()
      //     }
      //   })
      // })
    },
  }
}

export default user
