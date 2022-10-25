<template>
  <div
    id="aitem"
    draggable="true"
    @dragstart="dragstart"
    class="aUnit-container"
  >
    我是a组件
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    dragstart (e) {
      e.dataTransfer.setData('Text', e.target.id)
    }
  }
}
</script>

<style lang="less">
.aUnit-container {
  width: 80px;
  height: 30px;
  background-color: red;

  &:hover {
    cursor: pointer;
  }
}
</style>
