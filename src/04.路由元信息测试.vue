<template>
  <div>
    <router-view></router-view>
    <h2>{{ $route.meta }}</h2>
    <p v-if="$route.meta.info">他有一个技能哦</p>
  </div>
</template>

<script>
export default {
  created () {
    console.log(this.$route.meta)
  }
}
</script>

<style></style>
