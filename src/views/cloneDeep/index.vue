<template>
  <!-- 深拷贝 -->
  <div class="clone-container"></div>
</template>

<script>
import res from '@/assets/res'
import _ from 'lodash'
export default {
  naem: 'cloneDeep',
  created () {
    console.log('处理前', res.data)
    let newData = this.toolRouters(_.cloneDeep(res.data))
    console.log('处理后', newData)
  },
  methods: {
    // 处理路由
    toolRouters (menu) {
      let arr = []
      menu.forEach(element => {
        if (element.children && element.children.length) {
          // meta里面保留筛选的跳转菜单和按钮
          element.meta.btnList = element.children.filter(item => {
            if (item.hidden || item.type === 1) {
              // 将跳转路由拼接到父级同
              if (item.type === 0) {
                arr.push(_.cloneDeep(item))
              }
              return item
            }
          })
          // children 只保留显示的子集菜单
          element.children = element.children.filter(item => {
            if (!item.hidden && item.type === 0) {
              return item
            }
          })
          element.children = this.toolRouters(_.cloneDeep(element.children))
        }
        arr.push(_.cloneDeep(element))
      })

      return arr
    }
  }
}
</script>

<style></style>
