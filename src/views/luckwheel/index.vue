<template>
  <!-- 转盘 -->
  <div class="luckweel-container">
    <ul class="pie">
      <li
        v-for="item in 6"
        :key="item"
        :style="{
          transform: `skewX(${90 - 360 / 6}deg) rotate(${90 -
            (360 / 6) * item}deg)`
        }"
        class="item"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.pie {
  position: relative;
  background-color: yellow;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin: 100px auto;

  .item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: pink;
    transform-origin: 0 100%;
    // transform: skew(30deg, 0);
  }
}
</style>
