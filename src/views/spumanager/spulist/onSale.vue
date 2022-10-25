<template>
  <!-- 在售商品 -->
  <div class="onSale">
    <el-button @click="inviteBuyShow = true" type="primary">邀请购买</el-button>
    <el-button @click="siteLaunchShow = true" type="primary"
      >站外投放</el-button
    >

    <!-- 邀请购买 -->
    <InviteBuy
      :inviteBuyShow="inviteBuyShow"
      @closeShow="handleClose"
    ></InviteBuy>

    <!-- 站外投放 -->
    <SiteLaunch
      :siteLaunchShow="siteLaunchShow"
      @closeShow="handleClose"
    ></SiteLaunch>
  </div>
</template>

<script>
import InviteBuy from './inviteBuy'
import SiteLaunch from './siteLaunch'
export default {
  name: 'onSale',
  data () {
    return {
      inviteBuyShow: false,
      siteLaunchShow: false
    }
  },
  components: {
    InviteBuy,
    SiteLaunch
  },
  methods: {
    // 关闭邀请购买或站外投放的弹窗
    handleClose (close) {
      this.inviteBuyShow = close
      this.siteLaunchShow = close
    }
  }
}
</script>

<style></style>
