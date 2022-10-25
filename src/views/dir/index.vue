<template>
  <!-- 自定义指令 -->
  <div class="dir-container">
    <!-- <div v-if="flag"> -->
    <div class="box" v-test="flag">
      <div class="child"></div>
    </div>
    <!-- </div> -->
    <el-button @click="handleClick">按钮</el-button>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      a: 1,
      flag: false
    }
  },
  created () {
    // let oldObj = {
    //   a: 12,
    //   'user.id': 1,
    //   'user.name': '张三',
    //   b: 3
    // }
    // console.log('oldObj---', oldObj)
    // console.log('keys---', Object.keys(oldObj))
    // let newObj = {}
    // Object.keys(oldObj).forEach(key => {
    //   _.set(newObj, key, oldObj[key])
    // })
    // console.log('newObj--', newObj)
  },
  directives: {
    test: {
      bind (el, binding, vnode) {},
      inserted (el2) {},
      componentUpdated (el, binding, vnode) {},
      update (el, binding, vnode) {},
      unbind (el, binding, vnode) {}
    }
  },
  methods: {
    handleClick () {
      this.flag = !this.flag
    }
  }
}
</script>

<style lang="less">
.dir-container {
  .box {
    width: 100px;
    height: 100px;
    background-color: pink;
    margin: 100px auto;
  }
}
</style>
