<template>
  <div>
    <router-view></router-view>
    <h2>push跳转</h2>
    <input @click="pushPage('/pageA')" type="button" value="去页面A" />
    <input @click="pushPage('/pageB')" type="button" value="去页面B" />
    <input @click="pushPage('/pageC')" type="button" value="去页面C" />
    <h2>replace跳转</h2>
    <input @click="replacePage('/pageA')" type="button" value="去页面A" />
    <input @click="replacePage('/pageB')" type="button" value="去页面B" />
    <input @click="replacePage('/pageC')" type="button" value="去页面C" />
  </div>
</template>

<script>
export default {
  methods: {
    pushPage (path) {
      this.$router.push(path)
    },
    replacePage (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style></style>
