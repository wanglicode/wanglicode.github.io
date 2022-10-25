<template>
  <div class="open-container">
    <div v-html="str"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      str: 'adAdsCasdFdfa',
      stringChange: ''
    }
  },
  created () {
    // this.str.split('').forEach(val => {
    //   // console.log('val:', val)
    //   console.log(/^[A-Z]+$/.test(val), val)
    // })
    this.str = this.str
      .split('')
      .map(val => {
        if (/^[A-Z]+$/.test(val)) {
          return '<br/>' + val
        } else {
          return val
        }
      })
      .join('')
    // console.log(this.str)
  }
}
</script>

<style></style>
