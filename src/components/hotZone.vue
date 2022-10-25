<template>
  <div class="hot-zone-container">
    <div class="img-box">
      <!-- <img :src="require(imgUrl)" alt="" /> -->
      <div class="zone-box"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imgUrl']
}
</script>

<style lang="less">
.hot-zone-container {
  .img-box {
    width: 300px;
    height: 100px;
    background-color: pink;
  }
}
</style>
