<template>
  <div class="line-container">
    <div
      v-for="item in nodeList"
      :key="item.name"
      class="item"
      draggable="true"
      @mousedown="handleDown"
      @mousemove="handleMove"
      :style="{ top: `${item.positon.top}px`, left: `${item.positon.left}px` }"
    >
      {{ item.name }}
    </div>

    <!-- <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <line x1="30" y1="10" x2="110" y2="10" style="stroke:#006600;"></line>
    </svg> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      nodeList: [
        {
          name: '结点1',
          positon: {
            top: 10,
            left: 0
          },
          children: []
        }
      ],
      // 开始坐标
      startPoint: {
        x: 0,
        y: 0
      },
      flag: false,
      // 结束坐标
      endPoint: {
        x: 0,
        y: 0
      }
    }
  },
  mounted () {
    document.addEventListener('mouseup', e => {
      console.log('flag', this.flag)
      if (this.flag) {
        console.log('松开-111', this.startPoint)
        this.nodeList[0].positon.left = e.clientX - this.startPoint.x
        this.nodeList[0].positon.top = e.clientY - this.startPoint.y
        this.flag = false
      }
    })
  },
  methods: {
    handleDown (e) {
      console.log('按下鼠标', e)
      this.startPoint = { x: e.clientX, y: e.clientY }
      this.flag = true
    },
    handleMove (e) {
      // console.log('移动', e)
    },
    handleUp (e) {
      console.log('鼠标松开', e)
    }
    // handleDragStart (e) {
    //   console.log('开始拖拽', e)
    //   this.startPoint = { x: e.x, y: e.y }
    // }
    // handleDragEnd (e) {
    //   console.log('结束拖拽', e)
    //   console.log('startPoint', this.startPoint)
    //   // let x = e.x - this.startPoint.x

    //   // let y = e.x - this.startPoint.x
    //   this.nodeList[0].positon.left = e.x - this.startPoint.x
    //   this.nodeList[0].positon.top = e.y - this.startPoint.y
    // }
  }
}
</script>

<style lang="less">
.line-container {
  position: relative;

  .item {
    position: absolute;
    background: #ccc;
    width: 100px;
    height: 100px;
    cursor: move;
  }
}
</style>
