<template>
  <div class="layout-container">
    <div class="father">
      <a-unit></a-unit>
    </div>
    <div class="target-box">
      <div v-for="item in 6" :key="item" class="small-box"></div>
      <!-- <div
        v-for="item in 5"
        :key="item"
        @drop="drop"
        @dragover="dragover"
        class="small-box"
      ></div> -->
    </div>
  </div>
</template>

<script>
import aUnit from './components/aUnit'
export default {
  data () {
    return {}
  },
  components: {
    aUnit
  },
  methods: {
    drop (e) {
      e.preventDefault()
      console.log('drop', e)
      let id = e.dataTransfer.getData('Text')
      console.log('data', id)
      // let el = document.getElementById(id)
      e.target.appendChild(document.getElementById(id).cloneNode(true))
    },
    dragover (e) {
      e.preventDefault()
    }
  }
}
</script>

<style lang="less">
.layout-container {
  box-sizing: border-box;
  display: flex;

  .father {
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    background-color: pink;
  }

  .target-box {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    box-sizing: border-box;
    width: 202px;
    height: 300px;
    border: 1px solid #000;

    .small-box {
      // float: left;
      box-sizing: border-box;
      border: 1px solid green;
      width: 100px;
      height: 50px;
      align-items: center;
      // margin-bottom: 20px;
    }
  }
}
</style>
