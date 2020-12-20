<template>
  <div>
    <van-tabbar
      v-model="active"
      active-color="#ff6e00"
      inactive-color="#41b883"
      route
    >
      <van-tabbar-item to="/index" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item to="/info">
        <span>西兰花</span>
        <template #icon="props">
          <!-- <a href="#">去百度</a> -->
          <i class="iconfont iconicon_dianzanliang"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      active: 2
    }
  }
}
</script>

<style></style>
