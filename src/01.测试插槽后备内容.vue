<template>
  <div>
    <DefaultSlot>
      <h1>你好吗!^_^</h1>
    </DefaultSlot>
  </div>
</template>

<script>
import DefaultSlot from './components/03.插槽后备内容'
export default {
  name: 'app',
  components: {
    DefaultSlot
  }
}
</script>

<style></style>
