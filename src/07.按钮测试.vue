<template>
  <div>
    <van-button @click="doSomeThing" type="default" block>默认按钮</van-button>
    <van-button type="danger" block>默认按钮</van-button>
    <van-button type="primary" block>默认按钮</van-button>
    <van-button type="success" block>默认按钮</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    doSomeThing () {
      console.log('么么哒!!')
    }
  }
}
</script>

<style></style>
