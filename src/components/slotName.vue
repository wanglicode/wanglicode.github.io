<template>
  <div class="slot-container">
    <h4>插槽</h4>
    <slot name="wl" :a="form"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'slotName',
  data () {
    return {
      form: {
        name: '王李',
        age: 24
      }
    }
  }
}
</script>

<style></style>
