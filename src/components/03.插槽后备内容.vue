<template>
  <div class="default-container">
    <h2>后备内容</h2>
    <slot>
      <a href="#">我是默认值</a>
    </slot>
  </div>
</template>

<script>
export default {}
</script>

<style>
.default-container {
  background-color: yellowgreen;
  color: white;
}
</style>
