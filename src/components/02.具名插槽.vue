<template>
  <div class="name-slot-container">
    <h2>具名插槽测试</h2>
    <div class="top">
      <slot name="top"></slot>
    </div>
    <div class="mid">
      <slot></slot>
    </div>
    <div class="bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.name-slot-container {
  background-color: skyblue;
}
.name-slot-container > div {
  height: 200px;
}
.top {
  background-color: purple;
}
.mid {
  background-color: orange;
}
.bottom {
  background-color: pink;
}
</style>
