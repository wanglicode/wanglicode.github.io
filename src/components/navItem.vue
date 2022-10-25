<template>
  <h2 class="nav-item">
    <span>{{ itemData.title }}</span>
    <!-- 遍历后代 -->
    <nav-item
      v-for="(item, index) in itemData.children"
      :key="index"
      :itemData="item"
    >
    </nav-item>
  </h2>
</template>

<script>
export default {
  name: 'nav-item',
  props: ['itemData']
}
</script>

<style></style>
