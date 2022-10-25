<template>
  <div>
    <button @click="makeRandom">生成随机数</button>
    <h1>{{ num.toFixed() }}</h1>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'app',
  data () {
    return {
      num: 0
    }
  },
  created () {
    // 就是 data
    console.log(this.$data)
  },
  methods: {
    makeRandom () {
      const randomNum = parseInt(Math.random() * 1000)
      gsap.to(this.$data, { duration: 5, num: randomNum })
    }
  }
}
</script>

<style></style>
