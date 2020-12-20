<template>
  <div>
    <!-- <DefaultSlot>
      <template>
        <div class="out-box">
          感觉自己萌萌哒!!!
        </div>
      </template>
    </DefaultSlot> -->

    <NameSlot>
      <!-- <template v-slot:top> -->
      <template #top>
        中分还带波浪👱
      </template>
      感觉自己萌萌哒
      <!-- <template v-slot:bottom> -->
      萌你奶奶个腿
      <!-- </template> -->
    </NameSlot>
  </div>
</template>

<script>
// import DefaultSlot from './components/01.默认插槽'
import NameSlot from './components/02.具名插槽'
export default {
  name: 'app',
  components: {
    // DefaultSlot
    NameSlot
  }
}
</script>

<style>
.out-box {
  color: white;
  background-color: skyblue;
  padding: 20px;
}
</style>
