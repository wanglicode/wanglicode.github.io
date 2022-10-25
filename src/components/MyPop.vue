<template>
  <!-- <van-popup v-model="show">内容</van-popup> -->
  <van-popup :value="value" @input="onInput">内容</van-popup>
</template>

<script>
export default {
  // 外部 通过v-model的方式进行数据绑定
  props: ['value'],
  methods: {
    onInput (event) {
      //   console.log('input触发')
      //   console.log('event', event)
      this.$emit('input', event)
    }
  }
}
</script>

<style></style>
