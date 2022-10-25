<template>
  <div class="father-container">
    <h3>我是父组件</h3>
    <son v-model="dataList">
      <template #head="scope">
        <div>我是插槽里面的内容</div>
        <div>{{ scope }}</div>
        <form>
          <div>姓名:<input type="text" :value="scope.form.name" /></div>
          <div>年龄:<input type="text" :value="scope.form.age" /></div>
        </form>
      </template>
    </son>
  </div>
</template>

<script>
import son from '@/components/son.vue'
export default {
  data () {
    return {
      dataList: {
        name: '姚娜',
        age: '18'
      }
    }
  },
  components: {
    son
  }
}
</script>

<style></style>
