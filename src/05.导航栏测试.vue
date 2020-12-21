<template>
  <div>
    <van-nav-bar
      title="标题"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      class="mm-nav-bar"
    >
      <template #left>
        <i class="iconfont iconbtn_nav_back"></i>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  created () {
    console.log(this.$route.meta)
  },
  methods: {
    onClickLeft () {
      console.log('onClickLeft')
    },
    onClickRight () {
      console.log('onClickRight')
    }
  }
}
</script>

<style>
.mm-nav-bar .iconfont {
  font-size: 40px;
}
.mm-nav-bar .van-nav-bar__text {
  color: red;
}
</style>
