<template>
  <div>
    <van-swipe-cell>
      <template #left>
        <span>(づ￣ 3￣)づ</span>
      </template>
      <van-cell :border="false" title="单元格" value="内容" />
      <template #right>
        <van-button square type="danger" text="删除" />
        <span>呵呵!!</span>
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '(づ￣ 3￣)づ'
    }
  }
}
</script>

<style></style>
