<template>
  <div class="slot-container">
    <!-- <slot></slot> -->
    <h2>测试默认插槽</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style>
.slot-container {
  padding: 30px;
  background-color: yellowgreen;
}
</style>
