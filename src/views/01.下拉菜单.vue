<template>
  <div>
    <h2>下拉菜单</h2>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value2">
        <!-- 具名插槽 顶部 -->
        <template #title>
          <img class="banner" src="./assets/beHeart.png" alt="" />
        </template>
        <!-- 具名插槽 底部 -->
        <template>
          <img src="./assets/justdoit.png" alt="" />
        </template>
      </van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      value2: 'c',
      option2: []
    }
  }
}
</script>

<style>
img.banner {
  height: 20px;
}
</style>
