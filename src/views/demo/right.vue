<template>
  <div class="authority-container">
    <div class="btn">
      <button @click="jumpC">点击跳转</button>
    </div>
    <div>
      <input type="text" v-model="name" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'right',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    jumpC () {
      this.$router.addRoutes([
        {
          name: 'abc',
          path: '/abc',
          component: () => import('@/views/demo/abc.vue')
        }
      ])
      this.$router.push('/abc')
    }
  }
}
</script>

<style></style>
