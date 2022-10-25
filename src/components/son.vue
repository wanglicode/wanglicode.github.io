<template>
  <div class="son-container">
    <h4>我是儿子组件</h4>
    <slot name="head" :a="a" b="1" :form="value"></slot>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      a: '我是a自定义属性'
    }
  },
  created () {
    console.log('父亲传来的dataList:', this.value)
  }
}
</script>

<style lang="less">
.son-container {
  background-color: pink;
  min-height: 100px;
}
</style>
