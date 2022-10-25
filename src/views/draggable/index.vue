<template>
  <div class="draggable-containner">
    <draggable
      v-model="dataList"
      :options="{ group: 'title', animation: 150 }"
      :no-transition-on-drag="true"
    >
      <div class="items" v-for="item in dataList" :key="item.id">
        {{ item.title }}
      </div>
    </draggable>
  </div>
</template>

<script>
export default {
  name: 'drag',
  data () {
    return {
      dataList: [
        { id: 0, title: '我是0号', na: 'na' },
        { id: 1, title: '我是1号' },
        { id: 2, title: '我是2号' },
        { id: 3, title: '我是3号' }
      ]
    }
  },
  methods: {
    change (ele) {
      // console.log('拖拽:', ele)
      // console.log('旧的索引:', ele.moved.oldIndex)
      // console.log(this.dataList.splice(ele.moved.oldIndex, 1))
      console.log('dataList', this.dataList)
    },

    //start ,end ,add,update, sort, remove 得到的都差不多
    start (evt) {
      this.drag = true
      console.log(evt, 'start...')
    },
    end (evt) {
      console.log(evt, 'end....')
      this.drag = true
      evt.item //可以知道拖动的本身
      evt.to // 可以知道拖动的目标列表
      evt.from // 可以知道之前的列表
      evt.oldIndex // 可以知道拖动前的位置
      evt.newIndex // 可以知道拖动后的位置
    },
    move (evt, originalEvent) {
      console.log(evt, 'move')
      console.log(originalEvent) //鼠标位置
    }
  }
}
</script>

<style lang="less">
.draggable-containner {
  .items {
    border: 1px solid #000;
    height: 30px;
    width: 400px;
    background-color: pink;
  }

  .my {
    border: 1px solid #000;
    height: 30px;
    width: 400px;
    background-color: green;
  }
}
</style>
